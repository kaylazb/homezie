import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletTransactionDto, UpdateWalletTransactionDto, createWalletTransactionSchema, updateWalletTransactionSchema } from './dto/wallet-transaction.dto';


@Injectable()
export class WalletTransactionService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWalletTransactionDto) {
    const parsed = createWalletTransactionSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.walletTransaction.create({
      data: parsed.data,
    });
  }

  async findAll() {
    return this.prisma.walletTransaction.findMany({
      include: {
        wallet: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.walletTransaction.findUnique({
      where: { id },
      include: {
        wallet: true,
      },
    });
  }

  async update(id: string, data: UpdateWalletTransactionDto) {
    const parsed = updateWalletTransactionSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.walletTransaction.update({
      where: { id },
      data: parsed.data,
    });
  }

  async remove(id: string) {
    return this.prisma.walletTransaction.delete({
      where: { id },
    });
  }
}
