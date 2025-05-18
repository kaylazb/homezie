import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WalletModule } from 'src/wallet/wallet.module';


@Module({
  imports: [PrismaModule,WalletModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]

})
export class UsersModule {}
