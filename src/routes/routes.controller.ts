import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto, UpdateRouteDto, createRouteschema, updateRouteSchema } from './dto/route.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { updateBookingSchema } from 'src/booking/dto/create-booking.dot';
import { PaginationDto } from 'src/common/dto/pagination-dto';


@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  create(@Body( new ZodValidationPipe(createRouteschema)) body: CreateRouteDto) {
    return this.routesService.create(body);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.routesService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ZodValidationPipe(updateRouteSchema)) body: UpdateRouteDto) {
    return this.routesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(id);
  }
}
