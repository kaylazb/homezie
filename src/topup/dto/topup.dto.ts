import { z } from 'zod';

const StatusEnum = z.enum(['pending', 'success', 'failed']);

// Create DTO
export const createTopupSchema = z.object({
  user_id: z.string().uuid(),
  amount: z.number().int().positive(),
  status: StatusEnum,
});

export const updateTopupSchema = createTopupSchema.partial();

export type CreateTopupDto = z.infer<typeof createTopupSchema>;
export type UpdateTopupDto = z.infer<typeof updateTopupSchema>;