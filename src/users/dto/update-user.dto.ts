import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email is not valid' })
  email?: string;

  @IsOptional()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password?: string;

  role?: 'ADMIN' | 'CUSTOMER' | 'DRIVER'; // optional, default CUSTOMER
}