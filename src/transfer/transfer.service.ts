import { Injectable, BadRequestException } from '@nestjs/common';
import {
  CreateTransferDto,
  UpdateTransferDto,
  createTransferSchema,
  updateTransferSchema,
} from './dto/transfer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransferService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTransferDto) {
    const parsed = createTransferSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.transfer.create({
      data: parsed.data,
    });
  }

  async findAll() {
    return this.prisma.transfer.findMany({
      include: {
        fromWallet: true,
        toWallet: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.transfer.findUnique({
      where: { id },
      include: {
        fromWallet: true,
        toWallet: true,
      },
    });
  }

  async update(id: string, data: UpdateTransferDto) {
    const parsed = updateTransferSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.transfer.update({
      where: { id },
      data: parsed.data,
    });
  }

  async remove(id: string) {
    return this.prisma.transfer.delete({
      where: { id },
    });
  }
}
