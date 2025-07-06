import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HouseService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.house.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        location: true,
        image_url: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findById(id: string) {
    const house = await this.prisma.house.findUnique({
      where: { id },
    });
    if (!house) throw new NotFoundException('House not found');
    return house;
  }

  async create(data: CreateHouseDto) {
  return this.prisma.house.create({
    data,
  });
}
}
