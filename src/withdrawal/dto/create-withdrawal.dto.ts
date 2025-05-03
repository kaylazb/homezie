import { z } from 'zod';


const WithdrawalStatusEnum = z.enum(['pending', 'approved', 'rejected']); // sesuaikan jika perlu

// Create DTO
export const createWithdrawalSchema = z.object({
  user_id: z.string().uuid(),
  amount: z.number().int().positive(),
  bank_code: z.string().min(1),
  account_number: z.string().min(5),
  status: WithdrawalStatusEnum,
});

export const updateWithdrawalSchema = createWithdrawalSchema.partial();

export type CreateWithdrawalDto = z.infer<typeof createWithdrawalSchema>;
export type UpdateWithdrawalDto = z.infer<typeof updateWithdrawalSchema>;