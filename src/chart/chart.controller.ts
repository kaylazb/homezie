import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { ChartService } from './chart.service';
import { CreateChartDto } from './dto/create-chart.dto';

@Controller('houses')
export class HouseController {
  constructor(private readonly chartService: ChartService) {}

  @Post()
  async calculatePreferences(@Body() body: CreateChartDto) {
    return {
      message: 'Success get house list',
      data: await this.chartService.createChart,
    };
  }
}