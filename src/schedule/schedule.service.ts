// src/schedule/schedule.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // asumsi sudah punya PrismaService
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';


@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateScheduleDto) {
    return this.prisma.schedule.create({
      data,
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [schedules, total] = await Promise.all([
      this.prisma.schedule.findMany({
        skip,
        take: Number(limit),
        include: {
          bus: false,
          route: false,
          bookings: true,
        },
      }),
      
      this.prisma.schedule.count()
    ])

    return {
      data: {
        schedules,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all schedule"
    }
 
  }

  findOne(id: string) {
    return this.prisma.schedule.findUnique({
      where: { id },
      include: {
        bus: true,
        route: true,
        bookings: false,
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
