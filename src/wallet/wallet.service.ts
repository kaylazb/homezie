import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletDto, UpdateWalletDto } from './dto/wallet.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateWalletDto) {
    return this.prisma.wallet.create({
      data,
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [wallets, total] = await Promise.all([
      this.prisma.wallet.findMany({
        skip,
        take: Number(limit),
        include: {
          user: false, // asumsi wallet terhubung ke user
          transactions: true, // jika ada relasi transaksi
        },
      }),
      this.prisma.wallet.count()
    ])
    
    return {
      data: {
        wallets,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all transfer"
    }

  }

  findOne(id: string) {
    return this.prisma.wallet.findUnique({
      where: { id },
      include: {
        user: true,
        transactions: true,
      },
    });
  }

  update(id: string, data: UpdateWalletDto) {
    return this.prisma.wallet.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.wallet.delete({
      where: { id },
    });
  }
}
