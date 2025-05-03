import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopupDto, UpdateTopupDto, createTopupSchema, updateTopupSchema } from './dto/topup.dto';


@Injectable()
export class TopupService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTopupDto) {
    const parsed = createTopupSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.topup.create({
      data: parsed.data,
    });
  }

  async findAll() {
    return this.prisma.topup.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.topup.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, data: UpdateTopupDto) {
    const parsed = updateTopupSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.topup.update({
      where: { id },
      data: parsed.data,
    });
  }

  async remove(id: string) {
    return this.prisma.topup.delete({
      where: { id },
    });
  }
}
