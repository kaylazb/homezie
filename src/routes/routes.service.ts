import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRouteDto, UpdateRouteDto } from './dto/route.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';


@Injectable()
export class RoutesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createRouteDto: CreateRouteDto) {
    return this.prisma.route.create({
      data: createRouteDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [routes, total] = await Promise.all([
      this.prisma.route.findMany({
        skip,
        take: Number(limit),
        include: {
          schedules: false, // or true if you want to include schedules
        },  
      }),
      this.prisma.route.count()
    ])

    return {
      data: {
        routes,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all user"
    }
  }

  async findOne(id: string) {
    const route = await this.prisma.route.findUnique({
      where: { id },
    });

    if (!route) {
      throw new NotFoundException(`Route with id ${id} not found`);
    }

    return route;
  }

  async update(id: string, updateRouteDto: UpdateRouteDto) {
    return this.prisma.route.update({
      where: { id },
      data: updateRouteDto,
    });
  }

  async remove(id: string) {
    return this.prisma.route.delete({
      where: { id },
    });
  }
}
