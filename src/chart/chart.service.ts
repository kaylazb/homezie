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
          data: { chart_id: chart.id, house_id },
        }),
      ),
    );

    const houses = await this.prisma.house.findMany({
      where: { id: { in: dto.house_ids } },
    });

    // Titik acuan kampus (ITB Jatinangor contoh)
    const campusLat = -6.8991038;
    const campusLon = 107.6324348;

    // 1) Hitung jarak mentah (km)
    const housesWithDistance = houses.map(h => ({
      ...h,
      distance_from_campus: this.calculateDistance(
        campusLat,
        campusLon,
        h.latitude ? h.latitude.toNumber() : 0,
      h.longtitude ? h.longtitude.toNumber() : 0,
      ),
    }));

    // 2) Konversi jarak mentah -> skor ranking (semakin dekat semakin tinggi)
    const sortedByDistance = [...housesWithDistance].sort(
  (a, b) => a.distance_from_campus - b.distance_from_campus,
);
const idToDistanceScore = new Map<string, number>();
sortedByDistance.forEach((h, idx) => {
  // terdekat = 1, terjauh = n
  idToDistanceScore.set(h.id, idx + 1);
});

const housesScored = housesWithDistance.map(h => ({
  ...h,
  distance_score: idToDistanceScore.get(h.id) ?? 1,
}));

    // 3) Tipe kriteria
    const criteriaType: Record<string, 'benefit' | 'cost'> = {
      price: 'cost',
      land_area: 'benefit',
      building_area: 'benefit',
      bedrooms: 'benefit',
      distance: 'cost', // <— FIX: lokasi dianggap benefit (skor makin besar = makin bagus)
    };

    // 4) Bobot AHP (statis)
    const ahpWeights: Record<string, number> = {
      price: 0.627,
      land_area: 0.129,
      building_area: 0.129,
      bedrooms: 0.072,
      distance: 0.043,
    };

    // 5) Bobot user dari preferensi (1–5) -> dinormalisasi
    const userRaw = dto.user_preferences ?? {};
    const userTotal = Object.values(userRaw).reduce((acc, v) => acc + v, 0) || 1;
    const userWeights: Record<string, number> = {};
    for (const k in userRaw) userWeights[k] = userRaw[k] / userTotal;

    // 6) Faktor normalisasi (benefit = max; cost = min)
    const normalizationFactors: Record<string, number> = {};
    for (const key in criteriaType) {
      const values = housesScored.map(h =>
        key === 'distance' ? Number(h.distance_score) : Number((h as any)[key]),
      );
      normalizationFactors[key] =
        criteriaType[key] === 'benefit' ? Math.max(...values) : Math.min(...values);
    }

    // 7) Campuran AHP (70%) + User (30%)
    const alpha = 0.7;

    const ranked = housesScored.map(house => {
      let ahpScore = 0;
      let userScore = 0;

      const debug: any = {
        houseId: house.id,
        name: house.name,
        raw: {},
        normalized: {},
        weighted: { ahp: {}, user: {} },
      };

      for (const key in criteriaType) {
        const rawValue =
          key === 'distance'
            ? Number(house.distance_score)
            : Number((house as any)[key]);

        const norm =
          criteriaType[key] === 'benefit'
            ? rawValue / normalizationFactors[key]
            : normalizationFactors[key] / (rawValue || 1); // guard div/0

        const wAHP = (ahpWeights[key] ?? 0) * norm;
        const wUser = (userWeights[key] ?? 0) * norm;

        ahpScore += wAHP;
        userScore += wUser;

        debug.raw[key] = rawValue;
        debug.normalized[key] = norm;
        debug.weighted.ahp[key] = wAHP;
        debug.weighted.user[key] = wUser;
      }

      const finalScore = alpha * ahpScore + (1 - alpha) * userScore;

      debug.ahpScore = ahpScore;
      debug.userScore = userScore;
      debug.finalScore = finalScore;
      console.log('[DEBUG HOUSE SCORE]', JSON.stringify(debug, null, 2));

      return {
        ...house,
        distance_from_campus: Number(house.distance_from_campus.toFixed(2)),
        distance_score: house.distance_score,
        ahpScore: Number(ahpScore.toFixed(4)),
        userScore: Number(userScore.toFixed(4)),
        score: Number(finalScore.toFixed(4)),
      };
    });

    // 8) Urutkan & beri peringkat
    ranked.sort((a, b) => b.score - a.score);
    const rankedWithRank = ranked.map((h, i) => ({ ...h, rank: i + 1 }));

    return {
      message: 'Chart calculation success (Metode Gabungan AHP + Preferensi User)',
      data: rankedWithRank,
    };
  }

  // Haversine
  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const toRad = (v: number) => (v * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}
