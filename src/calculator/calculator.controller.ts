import { Controller, Post, Body } from '@nestjs/common';
import { CalculateInstallmentDto} from './calculator.dto';

@Controller('calculator')
export class CalculatorController {
  @Post('installment')
  calculateInstallment(@Body() body: CalculateInstallmentDto) {
    const { financing_amount, down_payment, tenor_years } = body;

    const months = tenor_years * 12;
    const totalLoan = financing_amount - down_payment;

    const monthlyInstallment = totalLoan / months;

    return {
      monthly_installment: Math.round(monthlyInstallment),
      total_months: months,
      note: 'Simulasi bersifat estimasi dan dapat berubah sewaktu-waktu sesuai kebijakan bank.',
    };
  }
}
