import { IsEmail, IsNotEmpty, IsOptional, IsString, IsDateString, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsPhoneNumber('ID') // kamu bisa ubah 'ID' ke kode negara lain jika perlu
  phone_number: string;

  @IsOptional()
  @IsString()
  profile_picture?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsDateString()
  birthdate?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  role?: 'ADMIN' | 'CUSTOMER' | 'DRIVER';

  @IsOptional()
  @IsString()
  device_type?: string;

  @IsOptional()
  @IsString()
  device_id?: string;

  @IsOptional()
  @IsString()
  last_ip?: string;

  @IsOptional()
  @IsString()
  last_location?: string;

  @IsOptional()
  @IsString()
  socket_id?: string;

  @IsOptional()
  @IsString()
  fcm_token?: string;
}
