import { IsArray, IsObject, IsString } from 'class-validator';

export class CreateChartDto {
  @IsString()
  user_id: string;

  @IsArray()
  house_ids: string[];

  @IsObject()
  user_preferences: {
    price: number;
    land_area: number;
    distance: number;
    bedrooms: number;
    building_area: number;
  };
}