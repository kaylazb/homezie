import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BusClassService } from './bus-class.service';
import { CreateBusClassDto, CreateBusClassSchema, UpdateBusClassDto } from './dto/bus-class.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { PaginationDto } from 'src/common/dto/pagination-dto';

@Controller('bus-class')
export class BusClassController {
  constructor(private readonly busClassService: BusClassService) {}

  @Post()
  create(@Body(new ZodValidationPipe(CreateBusClassSchema)) createBusClassDto: CreateBusClassDto) {
    return this.busClassService.create(createBusClassDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.busClassService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busClassService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusClassDto: UpdateBusClassDto) {
    return this.busClassService.update(id, updateBusClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.busClassService.remove(id);
  }
}
