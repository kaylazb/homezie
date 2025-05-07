import { z } from 'zod';

export const createRouteschema = z.object({
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  limit: z.number().optional(),
  page: z.number().optional()
});

export type CreateRouteDto = z.infer<typeof createRouteschema>;

export const updateRouteSchema = createRouteschema.partial();

export type UpdateRouteDto = z.infer<typeof updateRouteSchema>;
