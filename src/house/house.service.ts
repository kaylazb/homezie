import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';

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
        latitude: true,
        longtitude: true
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
  try {
    return await this.prisma.house.create({
      data,
    });
  } catch (error) {
    console.error('Create house error:', error);
    throw error;
  }
}

async update(id: string, data: UpdateHouseDto) {
  const existing = await this.prisma.house.findUnique({ where: { id } });
  if (!existing) throw new NotFoundException('House not found');

  return this.prisma.house.update({
    where: { id },
    data,
  });
}

async delete(id: string) {
  const existing = await this.prisma.house.findUnique({ where: { id } });
  if (!existing) throw new NotFoundException('House not found');

  return this.prisma.house.delete({
    where: { id },
  });
}

}
