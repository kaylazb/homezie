import { Injectable, BadRequestException } from '@nestjs/common';
import {
  CreateTransferDto,
  UpdateTransferDto,
  createTransferSchema,
  updateTransferSchema,
} from './dto/transfer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TransferService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateTransferDto) {



    const walletFrom = await this.prisma.wallet.findUnique({
      where: { id: data.from_wallet_id }
    })

    if (!walletFrom) throw new BadRequestException("wallet source not found")

    if (walletFrom.balance < data.amount) throw new BadRequestException("saldo tidak mencukupi")

    if (data.to_wallet_id === data.from_wallet_id) throw new BadRequestException("invalid destination account")

    const walletTo = await this.prisma.wallet.findUnique({
      where: { id: data.to_wallet_id }
    })

    if (!walletTo) throw new BadRequestException("wallet destination not found")

    await this.prisma.$transaction(async (tx) => {

      const transferOut = await tx.transfer.create({
        data: data
      })

      if (!transferOut) throw new Error("failed add transfer")

      const idfrom = uuidv4().replace(/-/g, '');

      const transactionOut = await tx.walletTransaction.create({
        data: {
          id: idfrom,
          wallet_id: data.from_wallet_id,
          amount: data.amount,
          payment_ref: "",
          trx_id: transferOut.id,
          type: "TRANSFER_OUT"
        }
      })

      if (!transactionOut) throw new Error("failed add transaction out")

      const idTo = uuidv4().replace(/-/g, '');

      const transactionIn = await tx.walletTransaction.create({
        data: {
          id: idTo,
          wallet_id: data.to_wallet_id,
          amount: data.amount,
          payment_ref: "",
          trx_id: transferOut.id,
          type: "TRANSFER_IN"
        }
      })

      if (!transactionIn) throw new Error("failed add transaction out")

      await tx.wallet.update({
        where: { id: data.from_wallet_id },
        data: {
          balance: walletFrom.balance - data.amount
        }
      })

      await tx.wallet.update({
        where: { id: data.to_wallet_id },
        data: {
          balance: walletTo.balance + data.amount
        }
      })

    })

    return {
      data: {},
      message: "success tranfer"
    }
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [transfers, total] = await Promise.all([
      this.prisma.transfer.findMany({
        skip,
        take: Number(limit),
        include: {
          fromWallet: true,
          toWallet: true,
        },
      }),
      this.prisma.transfer.count()
    ])

    return {
      data: {
        transfers,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all transfer"
    }
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
