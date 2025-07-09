import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { ChartService } from './chart.service';
import { CreateChartDto } from './dto/create-chart.dto';

@Controller('simulate')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Post('houses')
  async calculatePreferences(@Body() body: CreateChartDto) {
    const result = await this.chartService.createChart(body);
    return {
      message: 'Success create house',
      data: result,
    };
  }
}