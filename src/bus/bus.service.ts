import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // pastikan ada
import { CreateBusDto, UpdateBusDto } from './dto/bus.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';

@Injectable()
export class BusService {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreateBusDto) {
    return this.prisma.bus.create({
      data,
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [buses, total] = await Promise.all([
      this.prisma.bus.findMany({
        skip,
        take: Number(limit),
        include: {
          busClass: true
        }
      }),

      this.prisma.user.count(),
    ]);

    return {
      data: {
        buses,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all user"
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
