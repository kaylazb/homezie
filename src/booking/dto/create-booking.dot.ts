import { IsNotEmpty, IsString, IsInt, IsUUID } from 'class-validator';

export class CreateBookingDto {
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsUUID()
  @IsNotEmpty()
  schedule_id: string;

  @IsInt()
  @IsNotEmpty()
  total_amount: number;

  @IsString()
  @IsNotEmpty()
  status: string; // Misal: PENDING, CONFIRMED, CANCELLED

  @IsNotEmpty()
  seats: string[]; // Daftar nomor kursi
}