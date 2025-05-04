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

  async findAll() {
  const buses  = await  this.prisma.bus.findMany({
      include: {
        busClass: true,
        schedules: true,
      },
    });

    return {
      data : buses,
      messsage : "success get all buses"
    }
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
