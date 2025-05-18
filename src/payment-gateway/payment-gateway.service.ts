import { Injectable } from '@nestjs/common';
import { MidtransStrategy } from './strategies/midtrans.strategy';
import { XenditStrategy } from './strategies/xendit.strategy';
import { PaymentGateway } from './entities/payment-gateway.entity';
import { CreateVADto } from 'src/topup/dto/topup.dto';
import { CreateDisburstmentDto } from 'src/withdrawal/dto/create-withdrawal.dto';

@Injectable()
export class PaymentGatewayService {
  private strategies: Record<string, PaymentGateway>;
  private readonly gateWay = "xendit";

  constructor(
    private midtrans: MidtransStrategy,
    private xendit: XenditStrategy,
  ) {
    this.strategies = {
      midtrans: this.midtrans,
      xendit: this.xendit,
    };
  }

  async createVA(data: CreateVADto) { 
   
    if (this.gateWay == "xendit") {
      const result  = await this.xendit.createVA(data)
      return {
        data: result,
        message: "success generate VA"
      }
    } else {
      // this.midtrans.createVA(amount, userId)
    }

  }

  async disbursment(data: CreateDisburstmentDto) { 
   
    if (this.gateWay == "xendit") {
      const result  = await this.xendit.withdraw(data)
      return {
        data: result,
        message: "success disburstment"
      }
    } else {
      // this.midtrans.createVA(amount, userId)
    }

  }

  async checkStatus(gateway: string, referenceId: string) {

    switch (gateway) {
      case 'xendit':
        return this.xendit.checkStatus(referenceId);
      case 'midtrans':
        return this.midtrans.checkStatus(referenceId);
      default:
        throw new Error('Payment gateway not supported');
    }
  }
}
