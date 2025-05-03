import { z } from 'zod';

export const createWalletSchema = z.object({
  user_id: z.string().uuid({ message: 'Invalid user_id UUID format' }),
  balance: z.number().int().nonnegative().optional(), // default 0 if not set
});

export type CreateWalletDto = z.infer<typeof createWalletSchema>;
export const updateWalletSchema = createWalletSchema.partial();

export type UpdateWalletDto = z.infer<typeof updateWalletSchema>;