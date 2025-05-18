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
import { WalletService } from './wallet.service';
import { CreateWalletDto, UpdateBalanceDto, UpdateWalletDto, createWalletSchema, updateWalletSchema, updateBalanceSchema } from './dto/wallet.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import { UpdateBalanceDisburstmentDto, updateBalaneDisburstmentSchema } from 'src/wallet-transaction/dto/wallet-transaction.dto';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  create(@Body( new ZodValidationPipe(createWalletSchema)) createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto.user_id);
  }

  @Get()
  findAll(@Query() papginationDto: PaginationDto) {
    return this.walletService.findAll(papginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletService.findOne(id);
  }

  @Get('/balance/:id')
  findOneByUser(@Param('id') id: string) {
    return this.walletService.findOneByUserId(id);
  }

  @Post('/tp/update-balance')
  updateBalance(@Body( new ZodValidationPipe(updateBalanceSchema)) updateBallanceDto: UpdateBalanceDto) {
    return this.walletService.updateBalanceTopup(updateBallanceDto);
  }

  @Post('/wd/update-balance')
  updateBalanceDisburstment(@Body( new ZodValidationPipe(updateBalaneDisburstmentSchema)) updateBallanceDto: UpdateBalanceDisburstmentDto) {
    return this.walletService.updateBalanceDisburstment(updateBallanceDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body( new ZodValidationPipe(updateWalletSchema)) updateWalletDto: UpdateWalletDto) {
    return this.walletService.update(id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletService.remove(id);
  }
}
