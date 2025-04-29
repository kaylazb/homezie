import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // pastikan ada
import { CreateBusDto, UpdateBusDto } from './dto/bus.dto';

@Injectable()
export class BusService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateBusDto) {
    return this.prisma.bus.create({
      data,
    });
  }

  findAll() {
    return this.prisma.bus.findMany({
      include: {
        busClass: true,
        schedules: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.bus.findUnique({
      where: { id },
      include: {
        busClass: true,
        schedules: true,
      },
    });
  }

  update(id: string, data: UpdateBusDto) {
    return this.prisma.bus.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.bus.delete({
      where: { id },
    });
  }
}
