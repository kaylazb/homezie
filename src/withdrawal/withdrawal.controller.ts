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
import { WithdrawalService } from './withdrawal.service';
import { CreateWithdrawalDto, UpdateWithdrawalDto, createWithdrawalSchema, updateWithdrawalSchema } from './dto/create-withdrawal.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import { updateBalanceSchema } from 'src/wallet/dto/wallet.dto';
import { UpdateBalanceDisburstmentDto } from 'src/wallet-transaction/dto/wallet-transaction.dto';

@Controller('withdrawals')
export class WithdrawalController {
  constructor(private readonly withdrawalService: WithdrawalService) {}

  @Post()
  create(@Body(new ZodValidationPipe(createWithdrawalSchema)) body: CreateWithdrawalDto) {
    return this.withdrawalService.create(body);
  }

  @Get()
  findAll(@Query() paginantionDto: PaginationDto) {
    return this.withdrawalService.findAll(paginantionDto);
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
