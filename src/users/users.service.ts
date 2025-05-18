// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, createUserSchema, UpdateUserDto, updateUserSchema } from './dto/user.dto';
import { User } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { WalletService } from 'src/wallet/wallet.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService, private walletService: WalletService) { }

  async create(data: CreateUserDto) {

    const id = uuidv4().replace(/-/g, '');
    console.log(id)

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const userData = { ...data, password: hashedPassword, id: id }

    const addNewUser = await this.prisma.$transaction(async (tx) => {

      const newUser = await tx.user.create({
        data: userData,
      });
      if (!newUser) throw new Error("failed create user")

      console.log(newUser)

      await this.walletService.createTx(userData.id, tx)

      return newUser

    })

    return addNewUser

  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
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
      include : {
        wallet: true
      }
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
