import { z } from 'zod';

// Untuk Create
export const CreateBusClassSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

// Untuk Update
export const UpdateBusClassSchema = CreateBusClassSchema.partial();

// Types
export type CreateBusClassDto = z.infer<typeof CreateBusClassSchema>;
export type UpdateBusClassDto = z.infer<typeof UpdateBusClassSchema>;