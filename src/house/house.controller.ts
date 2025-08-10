import { Controller, Get, Post, Param, Body, Patch, Delete} from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';

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

  @Patch(':id')
  async updateHouse(@Param('id') id: string, @Body() body: UpdateHouseDto) {
  const result = await this.houseService.update(id, body);
  return {
    message: 'Success update house',
    data: result,
  };
}

  @Delete(':id')
  async deleteHouse(@Param('id') id: string) {
  await this.houseService.delete(id);
  return {
    message: 'Success delete house',
  };
}
}
