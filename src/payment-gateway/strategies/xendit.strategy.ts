import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {  PaymentGateway } from '../entities/payment-gateway.entity';
import { CreateVADto } from 'src/topup/dto/topup.dto';
import { CreateDisburstmentDto, CreateWithdrawalDto } from 'src/withdrawal/dto/create-withdrawal.dto';
import { XenditDisburstmentResponseDto } from '../dto/payment-gateway.dto';

@Injectable()
export class XenditStrategy implements PaymentGateway {
  
  private readonly xenditKey = process.env.XENDIT_API_KEY || "kosong";
  private readonly baseUrl = 'https://api.xendit.co'; // sandbox URL

  private  timestamp = new Date().toISOString(); 

  async createVA(data: CreateVADto): Promise<AxiosResponse> {

    //wallet id di urutan nomor 2 lebih mudah di akses dengan split(-)[1]
    const externalId = `TP-${data.wallet_id}-${this.timestamp}`;
    
    try {
      const response = await axios.post(`${this.baseUrl}/callback_virtual_accounts`,
      {
        "external_id": externalId,
        "bank_code": data.bank_code,
        "name": data.name,
     }
     ,
        {
          auth: {
            username: this.xenditKey,
            password: '', // Xendit hanya butuh username, password bisa dikosongkan
          },
        },
      );

      return response.data // Mengembalikan nomor VA dan data lainnya
    } catch (error) {
   
      throw new InternalServerErrorException('Error creating virtual account');
    }
  }

  async checkStatus(referenceId: string): Promise<any> {
    const res = await axios.get(`https://api.xendit.co/v2/invoices?external_id=${referenceId}`, {
      auth: {
        username: this.xenditKey || "",
        password: '',
      },
    });

    const invoice = res.data[0];

    return {
      status: invoice.status,
      paidAt: invoice.paid_at,
    };
  }

  async  withdraw(data: CreateDisburstmentDto): Promise<XenditDisburstmentResponseDto> {

    const id = uuidv4().replace(/-/g, ''); 
    const externalId = `WD-${id}-${this.timestamp}`;

    try {
      const res = await axios.post(
        'https://api.xendit.co/disbursements',
        {
          external_id: externalId,
          bank_code: data.bank_code,
          account_holder_name: data.account_holder_name, // Optional 
          account_number: data.account_number,
          amount: data.amount,
          description: 'Wallet Withdrawal',
        },
        {
          auth: {
            username: this.xenditKey || "",
            password: '',
          },
        },
      );
      console.log(res.data)
      return res.data
    } catch (e) {
      console.log(e.response.data)
      throw new InternalServerErrorException('Error withdrawal');
    }
      
  }

  async checkWithdrawalStatus(externalId: string): Promise<any> {
    const res = await axios.get(
      `https://api.xendit.co/disbursements?external_id=${externalId}`,
      {
        auth: {
          username: this.xenditKey || "",
          password: '',
        },
      },
    );

    return res.data;
  }
}
