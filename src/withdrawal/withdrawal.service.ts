import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWithdrawalDto, UpdateWithdrawalDto, createWithdrawalSchema, updateWithdrawalSchema } from './dto/create-withdrawal.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';


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

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [withdrawals, total] = await Promise.all([

      this.prisma.withdrawal.findMany({
        skip,
        take: Number(limit),
        include: {
          user: true,
        },
      }),
      this.prisma.withdrawal.count()
    ])

    return {
      data: {
        withdrawals,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all wallet transaction"
    }
   
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
