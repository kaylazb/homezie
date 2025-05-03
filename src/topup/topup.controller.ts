import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TopupService } from './topup.service';
import { CreateTopupDto, UpdateTopupDto, createTopupSchema } from './dto/topup.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

@Controller('topups')
export class TopupController {
  constructor(private readonly topupService: TopupService) {}

  @Post()
  create(@Body(new ZodValidationPipe(createTopupSchema)) body: CreateTopupDto) {
    return this.topupService.create(body);
  }

  @Get()
  findAll() {
    return this.topupService.findAll();
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
