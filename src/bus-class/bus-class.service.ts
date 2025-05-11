import { Injectable } from '@nestjs/common';
import { CreateBusClassDto, UpdateBusClassDto } from './dto/bus-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination-dto';

@Injectable()
export class BusClassService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createBusClassDto: CreateBusClassDto) {
    return this.prisma.busClass.create({
      data: {
        name: createBusClassDto.name,
        description: createBusClassDto.description,
      },
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [busClasses, total] = await Promise.all([
      this.prisma.busClass.findMany({
        skip,
        take: Number(limit),
        include: {
          buses: false
        }
      }),

      this.prisma.user.count(),
    ]);

    return {
      data: {
        busClasses,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all user"
    }
  }

  async findOne(id: string) {
    return this.prisma.busClass.findUnique({
      where: { id },
      include: {
        buses: true, // Kalau mau sekalian ambil bus nya
      },
    });
  }

  async update(id: string, updateBusClassDto: UpdateBusClassDto) {
    return this.prisma.busClass.update({
      where: { id },
      data: {
        name: updateBusClassDto.name,
        description: updateBusClassDto.description,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.busClass.delete({
      where: { id },
    });
  }
}
