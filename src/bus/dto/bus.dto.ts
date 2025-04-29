import { z } from 'zod';

export const CreateBusSchema = z.object({
  name: z.string().min(1, "Name is required"),
  capacity: z.number().int().positive(),
  bus_class_id: z.string().uuid(),
});

export type CreateBusDto = z.infer<typeof CreateBusSchema>;

export const UpdateBusSchema = CreateBusSchema.partial();

export type UpdateBusDto = z.infer<typeof UpdateBusSchema>;