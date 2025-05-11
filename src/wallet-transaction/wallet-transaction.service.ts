import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletTransactionDto, UpdateWalletTransactionDto, createWalletTransactionSchema, updateWalletTransactionSchema } from './dto/wallet-transaction.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';


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

  async findAll(paginationDto: PaginationDto) {


    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [walletTransactions, total] = await Promise.all([
      this.prisma.walletTransaction.findMany({
        skip,
        take: Number(limit),
        include: {
          wallet: true,
        },
      }),
      this.prisma.walletTransaction.count()
    ])

    return {
      data: {
        walletTransactions,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all wallet transaction"
    }

  
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
