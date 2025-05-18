import { z } from 'zod';

const StatusEnum = z.enum(['pending', 'success', 'failed']);

// Create DTO
export const createTopupSchema = z.object({
  wallet_id: z.string(),
  user_id: z.string().uuid(),
  amount: z.number().int().positive(),
  status: StatusEnum,
  reference: z.string()
});

export const createVASchema = z.object({
  bank_code: z.string(),
  name: z.string(),
  wallet_id: z.string()

});

export const updateTopupSchema = createTopupSchema.partial();

export type CreateTopupDto = z.infer<typeof createTopupSchema>;
export type UpdateTopupDto = z.infer<typeof updateTopupSchema>;
export type CreateVADto = z.infer<typeof createVASchema>;
