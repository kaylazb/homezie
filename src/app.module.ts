import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { HouseModule } from './house/house.module';

@Module({
  imports: [UsersModule, AuthModule, HouseModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
