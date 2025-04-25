import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dot';
import { UpdateBookingDto } from './dto/update-booking.tdo';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBookingDto) {
    return this.prisma.booking.create({
      data: {
        ...dto,
        seats: {
          create: dto.seats.map(seat => ({ seat_number: seat }))
        },
      },
      include: { seats: true },
    });
  }

  async findAll() {
    return this.prisma.booking.findMany({
      include: {
        user: true,
        schedule: true,
        seats: true,
        payment: true,
      },
    });
  }

  async findOne(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        schedule: true,
        seats: true,
        payment: true,
      },
    });

    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }

  async update(id: string, dto: UpdateBookingDto) {
    return this.prisma.booking.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}