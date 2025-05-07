import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRouteDto, UpdateRouteDto } from './dto/route.dto';


@Injectable()
export class RoutesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRouteDto: CreateRouteDto) {
    return this.prisma.route.create({
      data: createRouteDto,
    });
  }

  async findAll() {
    const routes = await  this.prisma.route.findMany({
      include: {
        schedules: false, // or true if you want to include schedules
      },
    });

    return {
      data: routes,
      message: "success find all routes"
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
