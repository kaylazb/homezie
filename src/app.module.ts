import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookingModule } from './booking/booking.module';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, BookingModule, ScheduleModule, AuthModule],
  controllers: [AppController, ScheduleController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
