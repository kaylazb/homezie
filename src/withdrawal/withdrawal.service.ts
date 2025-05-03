import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWithdrawalDto, UpdateWithdrawalDto, createWithdrawalSchema, updateWithdrawalSchema } from './dto/create-withdrawal.dto';


@Injectable()
export class WithdrawalService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWithdrawalDto) {
    const parsed = createWithdrawalSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.withdrawal.create({
      data: parsed.data,
    });
  }

  async findAll() {
    return this.prisma.withdrawal.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.withdrawal.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, data: UpdateWithdrawalDto) {
    const parsed = updateWithdrawalSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.withdrawal.update({
      where: { id },
      data: parsed.data,
    });
  }

  async remove(id: string) {
    return this.prisma.withdrawal.delete({
      where: { id },
    });
  }
}
