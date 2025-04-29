// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, createUserSchema, UpdateUserDto, updateUserSchema } from './dto/user.dto';
  

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const parsed = createUserSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(JSON.stringify(parsed.error.flatten()));
    }

    return this.prisma.user.create({
      data: parsed.data,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, data: UpdateUserDto) {
    const parsed = updateUserSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(JSON.stringify(parsed.error.flatten()));
    }

    return this.prisma.user.update({
      where: { id },
      data: parsed.data,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
