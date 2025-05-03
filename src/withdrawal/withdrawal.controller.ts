import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WithdrawalService } from './withdrawal.service';
import { CreateWithdrawalDto, UpdateWithdrawalDto, createWithdrawalSchema, updateWithdrawalSchema } from './dto/create-withdrawal.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

@Controller('withdrawals')
export class WithdrawalController {
  constructor(private readonly withdrawalService: WithdrawalService) {}

  @Post()
  create(@Body(new ZodValidationPipe(createWithdrawalSchema)) body: CreateWithdrawalDto) {
    return this.withdrawalService.create(body);
  }

  @Get()
  findAll() {
    return this.withdrawalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.withdrawalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ZodValidationPipe(updateWithdrawalSchema)) body: UpdateWithdrawalDto) {
    return this.withdrawalService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.withdrawalService.remove(id);
  }
}
