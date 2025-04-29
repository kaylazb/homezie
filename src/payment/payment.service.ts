import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto/payment.dto';

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

  async findAll() {
    return this.prisma.payment.findMany({
      include: {
        booking: true, // Kalau mau sekalian ambil data Booking yang terkait
      },
    });
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
