import { z } from 'zod';

export const createWalletTransactionSchema = z.object({
    wallet_id: z.string().uuid(),
    amount: z.number().int(),
    type: z.string().min(1), // bisa dibuat enum jika perlu
    reference: z.string().min(1),
  });

export type CreateWalletTransactionDto = z.infer<typeof createWalletTransactionSchema>;

export const updateWalletTransactionSchema = createWalletTransactionSchema.partial();

export type UpdateWalletTransactionDto = z.infer<typeof updateWalletTransactionSchema>;