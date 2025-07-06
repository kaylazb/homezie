import { IsNotEmpty, IsOptional, IsInt, IsString, IsUrl, IsNumber } from 'class-validator';

export class CreateHouseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsInt()
  land_area: number;

  @IsNotEmpty()
  @IsInt()
  building_area: number;

  @IsNotEmpty()
  @IsInt()
  bedrooms: number;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsOptional()
  image_url?: string;
}
