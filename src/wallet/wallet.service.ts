import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletDto, UpdateWalletDto } from './dto/wallet.dto';

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateWalletDto) {
    return this.prisma.wallet.create({
      data,
    });
  }

  findAll() {
    return this.prisma.wallet.findMany({
      include: {
        user: false, // asumsi wallet terhubung ke user
        transactions: true, // jika ada relasi transaksi
      },
    });
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
