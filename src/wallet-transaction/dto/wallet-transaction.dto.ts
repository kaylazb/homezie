import { z } from 'zod';
import { TransactionType } from '@prisma/client';

export const createWalletTransactionSchema = z.object({
    wallet_id: z.string().uuid(),
    amount: z.number().int(),
    type:z.nativeEnum(TransactionType), // bisa dibuat enum jika perlu
    payment_ref: z.string().min(1),
    trx_id: z.string()
  });

  export const updateBalaneDisburstmentSchema = z.object({
    id: z.string(),
    external_id: z.string(),
    amount: z.number(),
    bank_code: z.string(),
    account_holder_name: z.string(),
    // account_number: z.string(),
    status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED']),
    // timestamp: z.string().datetime(), 
  });

export type CreateWalletTransactionDto = z.infer<typeof createWalletTransactionSchema>;

export const updateWalletTransactionSchema = createWalletTransactionSchema.partial();

export type UpdateWalletTransactionDto = z.infer<typeof updateWalletTransactionSchema>;

export type UpdateBalanceDisburstmentDto = z.infer<typeof updateBalaneDisburstmentSchema>;