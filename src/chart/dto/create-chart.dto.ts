import { IsArray, IsObject, IsString } from 'class-validator';

export class CreateChartDto {
  @IsString()
  user_id: string;

  @IsArray()
  house_ids: string[];

  @IsObject()
  ahp_preferences: {
    price: number;
    land_area: number;
    distance: number;
    bedrooms: number;
    building_area: number;
  };
}