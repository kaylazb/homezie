import { z } from 'zod';

export const createBusSchema = z.object({
  name: z.string().min(1, "Name is required"),
  capacity: z.number().int().positive(),
  bus_class_id: z.string().uuid(),
});

export type CreateBusDto = z.infer<typeof createBusSchema>;

export const UpdateBusSchema = createBusSchema.partial();

export type UpdateBusDto = z.infer<typeof UpdateBusSchema>;