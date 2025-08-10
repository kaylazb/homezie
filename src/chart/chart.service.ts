import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChartDto } from './dto/create-chart.dto';

@Injectable()
export class ChartService {
  constructor(private prisma: PrismaService) {}

  async createChart(dto: CreateChartDto) {
    const chart = await this.prisma.chart.create({
      data: {
        user_id: dto.user_id,
        ahp_preferences: dto.user_preferences,
      },
    });

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

    const houses = await this.prisma.house.findMany({
      where: { id: { in: dto.house_ids } },
    });

    const campusLat = -6.8991038;
    const campusLon = 107.6324348;

    // Hitung jarak ke kampus
    const housesWithDistance = houses.map(h => ({
      ...h,
      distance_from_campus: this.calculateDistance(
        campusLat,
        campusLon,
        parseFloat(h.latitude !== null ? h.latitude.toString() : "0"),
parseFloat(h.longtitude !== null ? h.longtitude.toString() : "0"),

      ),
    }));

    // Ranking berdasarkan jarak (semakin dekat -> ranking lebih tinggi)
    const distanceRanks = [...housesWithDistance]
      .sort((a, b) => a.distance_from_campus - b.distance_from_campus)
      .map((h, index) => ({ id: h.id, distance_rank_score: houses.length - index }));

    // Tambahkan skor lokasi berdasarkan ranking
    const housesWithLocationScore = housesWithDistance.map(h => {
      const rank = distanceRanks.find(r => r.id === h.id);
      return {
        ...h,
        distance_score: rank?.distance_rank_score ?? 1, // fallback ke 1 kalau ga ketemu
      };
    });

    // Jenis kriteria
    const criteriaType: Record<string, 'benefit' | 'cost'> = {
      price: 'cost',
      land_area: 'benefit',
      building_area: 'benefit',
      bedrooms: 'benefit',
      distance: 'cost', // <== sekarang distance jadi benefit karena skor lokasi makin tinggi makin bagus
    };

    // Bobot AHP (statis)
    const ahpWeights: Record<string, number> = {
      price: 0.627,
      land_area: 0.129,
      building_area: 0.129,
      bedrooms: 0.072,
      distance: 0.043,
    };

    // Preferensi user (dinormalisasi)
    const userRaw = dto.user_preferences ?? {};
    const userTotal = Object.values(userRaw).reduce((acc, val) => acc + val, 0);
    const userWeights: Record<string, number> = {};
    for (const key in userRaw) {
      userWeights[key] = userRaw[key] / userTotal;
    }

    // Hitung normalisasi (min untuk cost, max untuk benefit)
    const normalizationFactors: Record<string, number> = {};
    for (const key in criteriaType) {
      const values = housesWithLocationScore.map(h =>
        key === 'distance' ? h.distance_score : Number(h[key]),
      );

      normalizationFactors[key] =
        criteriaType[key] === 'benefit'
          ? Math.max(...values)
          : Math.min(...values);
    }

    const alpha = 0.7; // kombinasi AHP & user (0.7 AHP, 0.3 user)

    const ranked = housesWithLocationScore.map(house => {
      let ahpScore = 0;
      let userScore = 0;

      const debug: any = {
        houseId: house.id,
        name: house.name,
        raw: {},
        normalized: {},
        weighted: {
          ahp: {},
          user: {},
        },
      };

      for (const key in criteriaType) {
        const rawValue =
          key === 'distance' ? house.distance_score : Number(house[key]);

        const normalizedValue =
          criteriaType[key] === 'benefit'
            ? rawValue / normalizationFactors[key]
            : normalizationFactors[key] / rawValue;

        const ahpWeighted = normalizedValue * (ahpWeights[key] ?? 0);
        const userWeighted = normalizedValue * (userWeights[key] ?? 0);

        ahpScore += ahpWeighted;
        userScore += userWeighted;

        debug.raw[key] = rawValue;
        debug.normalized[key] = normalizedValue;
        debug.weighted.ahp[key] = ahpWeighted;
        debug.weighted.user[key] = userWeighted;
      }

      const finalScore = alpha * ahpScore + (1 - alpha) * userScore;

      debug.ahpScore = ahpScore;
      debug.userScore = userScore;
      debug.finalScore = finalScore;

      console.log('[DEBUG HOUSE SCORE]', JSON.stringify(debug, null, 2));

      return {
        ...house,
        distance_from_campus: parseFloat(house.distance_from_campus.toFixed(2)),
        distance_score: house.distance_score,
        ahpScore: parseFloat(ahpScore.toFixed(4)),
        userScore: parseFloat(userScore.toFixed(4)),
        score: parseFloat(finalScore.toFixed(4)),
      };
    });

    // Urutkan dari skor tertinggi ke terendah
    ranked.sort((a, b) => b.score - a.score);

    const rankedWithRank = ranked.map((h, index) => ({
      ...h,
      rank: index + 1,
    }));

    return {
      message: 'Chart calculation success (Metode Gabungan AHP + Preferensi User)',
      data: rankedWithRank,
    };
  }

  // Rumus Haversine untuk menghitung jarak antar koordinat
  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius bumi (km)
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}
