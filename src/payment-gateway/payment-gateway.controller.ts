import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';


@Controller('payment-gateway')
export class PaymentGatewayController {
  constructor(private readonly paymentGatewayService: PaymentGatewayService) {}

}
