import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusSchema, UpdateBusSchema } from './dto/bus.dto';
import { z } from 'zod';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Post()
  async create(@Body() body: any) {
    const parseResult = CreateBusSchema.safeParse(body);
    if (!parseResult.success) {
      throw new Error(JSON.stringify(parseResult.error.format()));
    }

    return this.busService.create(parseResult.data);
  }

  @Get()
  findAll() {
    return this.busService.findAll();
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
