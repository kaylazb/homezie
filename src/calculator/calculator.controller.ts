import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CalculateInstallmentDto } from './calculator.dto';

@Controller('calculator')
export class CalculatorController {
  @Post('installment')
  @HttpCode(201)
  calculateInstallment(@Body() body: CalculateInstallmentDto) {
    const { financing_amount, down_payment, tenor_years } = body;

    const months = tenor_years * 12;
    const totalLoan = financing_amount - down_payment;
    const monthlyInstallment = totalLoan / months;

    return {
      success: true,
      code: 201,
      data: {
        monthly_installment: Math.round(monthlyInstallment),
        total_months: months,
        note:
          'Simulasi bersifat estimasi dan dapat berubah sewaktu-waktu sesuai kebijakan bank.',
      },
    };
  }
}
