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
    await Promise.all(dto.house_ids.map(house_id =>
      this.prisma.chartHouse.create({
        data: {
          chart_id: chart.id,
          house_id,
        },
      })
    ));

    // Ambil data rumah
    const houses = await this.prisma.house.findMany({
      where: { id: { in: dto.house_ids } },
    });

    // === HITUNG JARAK DARI KAMPUS ===
    const campusLat = -6.8991038;
    const campusLon = 107.6324348;

    const housesWithDistance = houses.map(h => {
      const distance = this.getDistanceFromLatLonInKm(
        campusLat,
        campusLon,
        parseFloat(h.latitude as any),
        parseFloat(h.longtitude as any),
      );
      return { ...h, distance_from_campus: distance };
    });

    // === AHP WEIGHT + SAW ===
    const weights = dto.ahp_preferences;

    const maxValues = {
      price: Math.min(...housesWithDistance.map(h => h.price.toNumber())),
      land_area: Math.max(...housesWithDistance.map(h => h.land_area)),
      distance: Math.max(...housesWithDistance.map(h => h.distance_from_campus)),
      bedrooms: Math.max(...housesWithDistance.map(h => h.bedrooms)),
      building_area: Math.max(...housesWithDistance.map(h => h.building_area)),
    };

    const ranked = housesWithDistance.map(h => {
      const score =
        (h.price.toNumber() / maxValues.price) * weights.price +
        (h.land_area / maxValues.land_area) * weights.land_area +
        (h.distance_from_campus / maxValues.distance) * weights.distance +
        (h.bedrooms / maxValues.bedrooms) * weights.bedrooms +
        (h.building_area / maxValues.building_area) * weights.building_area;

      return {
        ...h,
        score: parseFloat(score.toFixed(3)),
      };
    });

    // Urutkan dari skor tertinggi
    ranked.sort((a, b) => b.score - a.score);

    return {
      message: 'Chart calculation success',
      data: ranked,
    };
  }

  // Fungsi untuk hitung jarak antar koordinat (dalam KM)
  private getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius bumi dalam KM
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
