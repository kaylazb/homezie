import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChartDto } from './dto/create-chart.dto';

@Injectable()
export class ChartService {
  constructor(private prisma: PrismaService) {}

  async createChart(dto: CreateChartDto) {
    // Simpan chart
    const chart = await this.prisma.chart.create({
      data: {
        user_id: dto.user_id,
        ahp_preferences: dto.ahp_preferences,
      },
    });

    // Simpan relasi rumah yang dipilih
    await Promise.all(
      dto.house_ids.map(house_id =>
        this.prisma.chartHouse.create({
          data: {
            chart_id: chart.id,
            house_id,
          },
        }),
      ),
    );

    // Ambil data rumah
    const houses = await this.prisma.house.findMany({
      where: { id: { in: dto.house_ids } },
    });

    // Hitung jarak dari kampus
    const campusLat = -6.8991038;
    const campusLon = 107.6324348;

    const housesWithDistance = houses.map(h => {
      const distance = this.calculateDistance(
        campusLat,
        campusLon,
        parseFloat(h.latitude as any),
        parseFloat(h.longtitude as any),
      );
      console.log(`Distance to ${h.name}: ${distance} km`);
      return { ...h, distance_from_campus: distance };
    });

    // ==== Proses AHP ====

    const criteria = ['price', 'land_area', 'building_area', 'bedrooms', 'distance'];
    const size = criteria.length;
    const matrix: number[][] = Array.from({ length: size }, () => Array(size).fill(1));

    const pairs = dto.ahp_preferences;
    const mapping: Record<string, [number, number]> = {
      price_vs_land: [0, 1],
      price_vs_building: [0, 2],
      price_vs_bedrooms: [0, 3],
      price_vs_location: [0, 4],
      land_vs_building: [1, 2],
      land_vs_bedrooms: [1, 3],
      land_vs_location: [1, 4],
      building_vs_bedrooms: [2, 3],
      building_vs_location: [2, 4],
      bedrooms_vs_location: [3, 4],
    };

    for (const key in pairs) {
      const [i, j] = mapping[key];
      matrix[i][j] = pairs[key];
      matrix[j][i] = 1 / pairs[key];
    }

    // Hitung bobot AHP
    const columnSums = Array(size).fill(0);
    for (let j = 0; j < size; j++) {
      for (let i = 0; i < size; i++) {
        columnSums[j] += matrix[i][j];
      }
    }

    const normalized: number[][] = matrix.map(row =>
      row.map((value, j) => value / columnSums[j]),
    );

    const weights: Record<string, number> = {};
    normalized.forEach((row, i) => {
      const avg = row.reduce((a, b) => a + b, 0) / size;
      weights[criteria[i]] = parseFloat(avg.toFixed(3));
    });

    // ==== SAW ====

    const criteriaType: Record<string, 'benefit' | 'cost'> = {
      price: 'cost',
      land_area: 'benefit',
      building_area: 'benefit',
      bedrooms: 'benefit',
      distance: 'cost',
    };

    const normalizationFactors: Record<string, number> = {};
    for (const key of Object.keys(criteriaType)) {
      const values = housesWithDistance.map(h => {
        return key === 'distance'
          ? h.distance_from_campus
          : h[key] instanceof Object
            ? h[key].toNumber()
            : h[key];
      });

      normalizationFactors[key] =
        criteriaType[key] === 'benefit'
          ? Math.max(...values)
          : Math.min(...values);
    }

    const ranked = housesWithDistance.map(h => {
      let score = 0;

      for (const key of Object.keys(criteriaType)) {
        const value =
          key === 'distance'
            ? h.distance_from_campus
            : h[key] instanceof Object
              ? h[key].toNumber()
              : h[key];

        const normalized =
          criteriaType[key] === 'benefit'
            ? value / normalizationFactors[key]
            : normalizationFactors[key] / value;

        score += normalized * weights[key];

        console.log(`key: ${key}, value: ${value}, normalized: ${normalized}, weight: ${weights},`);

      }

      return {
        ...h,
        score: parseFloat(score.toFixed(4)),
      };
    });

    ranked.sort((a, b) => b.score - a.score);

    const rankedWithRank = ranked.map((h, index) => ({
      ...h,
      rank: index + 1,
    }));

    return {
      message: 'Chart calculation success',
      data: rankedWithRank,
    };
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; 
  const toRad = (value: number) => (value * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
