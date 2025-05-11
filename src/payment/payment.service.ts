import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto/payment.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: {
        booking_id: createPaymentDto.booking_id,
        amount: createPaymentDto.amount,
        status: createPaymentDto.status,
      },
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [payments, total] = await Promise.all([
      this.prisma.payment.findMany({
        skip,
        take: Number(limit),
        include: {
          booking: true,
        },
      }),
      this.prisma.payment.count()
    ]);

    return {
      data: {
        payments,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all payment"
    }

  }

  async findOne(id: string) {
    return this.prisma.payment.findUnique({
      where: { id },
      include: {
        booking: true, // Bisa di-set false kalau tidak mau relasi
      },
    });
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: {
        booking_id: updatePaymentDto.booking_id,
        amount: updatePaymentDto.amount,
        status: updatePaymentDto.status,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.payment.delete({
      where: { id },
    });
  }
}
