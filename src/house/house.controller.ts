import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';

@Controller('houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get()
  async getAllHouses() {
    return {
      message: 'Success get house list',
      data: await this.houseService.findAll(),
    };
  }

  @Get(':id')
  async getHouseById(@Param('id') id: string) {
    return {
      message: 'Success get house detail',
      data: await this.houseService.findById(id),
    };
  }

   @Post()
  async createHouse(@Body() body: CreateHouseDto) {
    const result = await this.houseService.create(body);
    return {
      message: 'Success create house',
      data: result,
    };
  }
}
