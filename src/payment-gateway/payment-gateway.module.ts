import { Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { MidtransStrategy } from './strategies/midtrans.strategy';
import { XenditStrategy } from './strategies/xendit.strategy';

@Module({
  providers: [PaymentGatewayService, MidtransStrategy, XenditStrategy],
  exports: [PaymentGatewayService],
})
export class PaymentGatewayModule {}
