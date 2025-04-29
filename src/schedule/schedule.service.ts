// src/schedule/schedule.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // asumsi sudah punya PrismaService
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';


@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateScheduleDto) {
    return this.prisma.schedule.create({
      data,
    });
  }

  findAll() {
    return this.prisma.schedule.findMany({
      include: {
        bus: false,
        route: false,
        bookings: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.schedule.findUnique({
      where: { id },
      include: {
        bus: true,
        route: true,
        bookings: true,
      },
    });
  }

  update(id: string, data: UpdateScheduleDto) {
    return this.prisma.schedule.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.schedule.delete({
      where: { id },
    });
  }
}
