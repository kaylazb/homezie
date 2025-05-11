import { Injectable, BadRequestException } from '@nestjs/common';
import {
  CreateTransferDto,
  UpdateTransferDto,
  createTransferSchema,
  updateTransferSchema,
} from './dto/transfer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination-dto';

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
