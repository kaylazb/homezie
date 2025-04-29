import { Injectable } from '@nestjs/common';
import { CreateBusClassDto, UpdateBusClassDto } from './dto/bus-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BusClassService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBusClassDto: CreateBusClassDto) {
    return this.prisma.busClass.create({
      data: {
        name: createBusClassDto.name,
        description: createBusClassDto.description,
      },
    });
  }

  async findAll() {
    return this.prisma.busClass.findMany({
      include: {
        buses: false, // Tidak ikut ambil relasi 'buses'
      },
    });
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
