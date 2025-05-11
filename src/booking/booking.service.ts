import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto, UpdateBookingDto } from './dto/create-booking.dot';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import { ScheduleService } from 'src/schedule/schedule.service';


@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService, private readonly scheduleService: ScheduleService) {}

  async create(dto: CreateBookingDto) {

    let dataBooking = {...dto,total_amount: 0}

    const busses = await this.scheduleService.findOne(dto.schedule_id)

    dataBooking.total_amount = (busses?.price ?? 0) * dto.seats.length

    return this.prisma.booking.create({
      data: {
        ...dataBooking,
        seats: {
          create: dataBooking.seats.map(seat => ({ seat_number: seat }))
        },
      },
      include: { seats: true },
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [bookings, total] = await Promise.all([
       this.prisma.booking.findMany({
        skip,
        take: Number(limit),
        include: {
          user: false,
          schedule: true,
          seats: true,
          payment: true,
        },
      }), 
      this.prisma.booking.count()
    ])

    return {
      data: {
        bookings,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all user"
    }
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
      data: {
        schedule_id: dto.schedule_id,
        user_id: dto.user_id,
        total_amount: dto.total_amount,
        seats: {
          deleteMany: {}, // hapus semua seat lama
          create: dto.seats?.map(seat => ({ seat_number: seat })),
        },
        status: dto.status
      },
    });
  }

  async remove(id: string) {
    await this.prisma.bookingSeat.deleteMany({
      where: { booking_id: id },
    });
    
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}