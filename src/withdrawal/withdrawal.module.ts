import { Module } from '@nestjs/common';
import { WithdrawalService } from './withdrawal.service';
import { WithdrawalController } from './withdrawal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PaymentGatewayModule } from 'src/payment-gateway/payment-gateway.module';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [PrismaModule, PaymentGatewayModule, UsersModule],
  controllers: [WithdrawalController],
  providers: [WithdrawalService],
})
export class WithdrawalModule {}
