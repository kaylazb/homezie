import { IsNumber, Min } from 'class-validator';

export class CalculateInstallmentDto {
  @IsNumber()
  @Min(0)
  financing_amount: number;

  @IsNumber()
  @Min(0)
  down_payment: number;

  @IsNumber()
  @Min(1)
  tenor_years: number;
}
