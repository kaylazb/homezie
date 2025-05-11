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
import { TopupService } from './topup.service';
import { CreateTopupDto, UpdateTopupDto, createTopupSchema } from './dto/topup.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { PaginationDto } from 'src/common/dto/pagination-dto';

@Controller('topups')
export class TopupController {
  constructor(private readonly topupService: TopupService) {}

  @Post()
  create(@Body(new ZodValidationPipe(createTopupSchema)) body: CreateTopupDto) {
    return this.topupService.create(body);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.topupService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topupService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ZodValidationPipe(createTopupSchema)) body: UpdateTopupDto) {
    return this.topupService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topupService.remove(id);
  }
}
