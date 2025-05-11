
import { z } from 'zod';

export const createBookingSchema = z.object({
  user_id: z.string().uuid(),
  schedule_id: z.string().uuid(),
  seats: z.array(z.string()), // Array of seat numbers
});

export const updateBookingSchema = z.object({
  user_id: z.string().uuid(),
  schedule_id: z.string().uuid(),
  total_amount: z.number().int(),
  status: z.string(),
  seats: z.array(z.string()), // Array of seat numbers
});
// Untuk infer ke TypeScript type (kalau mau)
export type CreateBookingDto = z.infer<typeof createBookingSchema>;

export type UpdateBookingDto = z.infer<typeof updateBookingSchema>;
