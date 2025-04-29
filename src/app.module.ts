import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookingModule } from './booking/booking.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { BusModule } from './bus/bus.module';
import { BusClassModule } from './bus-class/bus-class.module';
import { PaymentModule } from './payment/payment.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [UsersModule, BookingModule, ScheduleModule, AuthModule, BusModule, BusClassModule, PaymentModule,BookingModule, RoutesModule ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
