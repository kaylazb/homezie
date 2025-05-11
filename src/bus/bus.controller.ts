import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ValidationPipe, Query } from '@nestjs/common';
import { BusService } from './bus.service';
import { createBusSchema, UpdateBusSchema } from './dto/bus.dto';
import { z } from 'zod';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { PaginationDto } from 'src/common/dto/pagination-dto';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Post()
  async create(@Body(new ZodValidationPipe(createBusSchema)) body: any) {
    const parseResult = createBusSchema.safeParse(body);
    if (!parseResult.success) {
      throw new Error(JSON.stringify(parseResult.error.format()));
    }

    return this.busService.create(parseResult.data);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.busService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.busService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    const parseResult = UpdateBusSchema.safeParse(body);
    if (!parseResult.success) {
      throw new Error(JSON.stringify(parseResult.error.format()));
    }

    return this.busService.update(id, parseResult.data);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.busService.remove(id);
  }
}
