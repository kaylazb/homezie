import { IsOptional, IsString, IsInt, IsUUID } from 'class-validator';

export class UpdateBookingDto {
  @IsUUID()
  @IsOptional()
  schedule_id?: string;

  @IsInt()
  @IsOptional()
  total_amount?: number;

  @IsString()
  @IsOptional()
  status?: string;
}