export class CreateChartDto {
  user_id: string;
  house_ids: string[];
  ahp_preferences: {
    price: number;
    land_area: number;
    distance: number;
    bedrooms: number;
    building_area: number;
    latitude:number;
    longtitude:number;
  };
}
