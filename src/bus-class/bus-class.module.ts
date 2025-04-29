import { Module } from '@nestjs/common';
import { BusClassService } from './bus-class.service';
import { BusClassController } from './bus-class.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BusClassController],
  providers: [BusClassService],
})
export class BusClassModule {}
