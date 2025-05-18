import { z } from 'zod';

// Create DTO
export const createWithdrawalSchema = z.object({
  user_id: z.string(),
  amount: z.number().int().positive(),
  bank_code: z.string().optional(),
  account_number: z.string().optional(),
});


export const createDisburstmentlSchema = z.object({
  amount: z.number().int().positive(),
  bank_code: z.string().optional(),
  account_number: z.string().optional(),
  account_holder_name: z.string().optional()
});

export const updateWithdrawalSchema = createWithdrawalSchema.partial();

export type CreateWithdrawalDto = z.infer<typeof createWithdrawalSchema>;
export type UpdateWithdrawalDto = z.infer<typeof updateWithdrawalSchema>;

export type CreateDisburstmentDto = z.infer<typeof createDisburstmentlSchema>;