// src/schedule/schedule.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';

import { ScheduleService } from './schedule.service';

import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { createScheduleSchema, CreateScheduleDto, updateScheduleSchema, UpdateScheduleDto } from './dto/schedule.dto';


@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  create(@Body(new ZodValidationPipe(createScheduleSchema)) createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(createScheduleSchema)) updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.scheduleService.update(id, updateScheduleDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(id);
  }
}
