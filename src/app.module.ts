import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { HouseModule } from './house/house.module';
import { ChartModule } from './chart/chart.module';

@Module({
  imports: [UsersModule, AuthModule, HouseModule, ChartModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
