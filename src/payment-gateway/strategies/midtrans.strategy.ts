import { Injectable } from '@nestjs/common';
import { PaymentGateway } from '../entities/payment-gateway.entity';


@Injectable()
export class MidtransStrategy implements PaymentGateway {
  async createVA(data: any): Promise<any> {
    // Midtrans API logic here
    return {
      paymentUrl: 'https://midtrans.com/payment-url',
      externalReference: 'midtrans-123',
    };
  }

  async checkStatus(referenceId: string): Promise<any> {
    return { status: 'SUCCESS' };
  }
}