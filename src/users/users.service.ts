// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, createUserSchema, UpdateUserDto, updateUserSchema } from './dto/user.dto';
import { User } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination-dto';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    const parsed = createUserSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(JSON.stringify(parsed.error.flatten()));
    }

    return this.prisma.user.create({
      data: parsed.data,
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page , limit  } = paginationDto;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        skip,
        take: Number(limit),
      }),
      this.prisma.user.count(),
    ]);

    return {
      data: {
        users,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all user"
    }
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

  async findByNumber(number: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { phone_number: number },
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
