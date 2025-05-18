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
import { CreateTopupDto, CreateVADto, UpdateTopupDto, createTopupSchema, createVASchema } from './dto/topup.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import { PaymentGatewayService } from 'src/payment-gateway/payment-gateway.service';


@Controller('topups')
export class TopupController {
  constructor(private readonly topupService: TopupService,
    private readonly paymentGateWayService: PaymentGatewayService)
    {}

  @Post()
  create(@Body(new ZodValidationPipe(createTopupSchema)) body: CreateTopupDto) {
    return this.topupService.create(body);
  }

  @Post("/generate-va")
  generate(@Body(new ZodValidationPipe(createVASchema)) body: CreateVADto) {
    return this.paymentGateWayService.createVA(body);
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
