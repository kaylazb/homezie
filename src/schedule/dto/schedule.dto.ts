import { z } from 'zod';

export const createScheduleSchema = z.object({
  bus_id: z.string(),
  route_id: z.string(),
  departure: z.string(),
  arrival: z.string(),
  price: z.number().int(),
});

export const updateScheduleSchema = createScheduleSchema.partial();

export type CreateScheduleDto = z.infer<typeof createScheduleSchema>;
export type UpdateScheduleDto = z.infer<typeof updateScheduleSchema>;