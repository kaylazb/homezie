import { Module } from '@nestjs/common';
import { TopupService } from './topup.service';
import { TopupController } from './topup.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PaymentGatewayModule } from 'src/payment-gateway/payment-gateway.module';
import { WalletTransactionModule } from 'src/wallet-transaction/wallet-transaction.module';

@Module({
  imports: [PrismaModule, PaymentGatewayModule, WalletTransactionModule],
  controllers: [TopupController],
  providers: [TopupService],
})
export class TopupModule {}
