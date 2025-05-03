import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WalletTransactionService } from './wallet-transaction.service';
import { CreateBookingDto } from 'src/booking/dto/create-booking.dot';
import { CreateWalletTransactionDto, UpdateWalletTransactionDto } from './dto/wallet-transaction.dto';

@Controller('wallet-transactions')
export class WalletTransactionController {
  constructor(
    private readonly walletTransactionService: WalletTransactionService,
  ) {}

  @Post()
  create(@Body() body: CreateWalletTransactionDto) {
    return this.walletTransactionService.create(body);
  }

  @Get()
  findAll() {
    return this.walletTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletTransactionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateWalletTransactionDto) {
    return this.walletTransactionService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletTransactionService.remove(id);
  }
}
