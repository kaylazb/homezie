import { z } from 'zod';

export const createWalletSchema = z.object({
  user_id: z.string().uuid({ message: 'Invalid user_id UUID format' }),
});

export const  updateBalanceSchema =  z.object({
  updated: z.string().datetime(), // ISO datetime string
  created: z.string().datetime(),
  payment_id: z.string(),
  callback_virtual_account_id: z.string(),
  owner_id: z.string(),
  external_id: z.string(),
  account_number: z.string(),
  bank_code: z.string(), // bisa divalidasi sebagai enum jika daftar bank pasti
  amount: z.number(),
  transaction_timestamp: z.string().datetime(),
  merchant_code: z.string(),
  id: z.string(),
});

export type CreateWalletDto = z.infer<typeof createWalletSchema>;
export const updateWalletSchema = createWalletSchema.partial();

export type UpdateWalletDto = z.infer<typeof updateWalletSchema>;
export type UpdateBalanceDto = z.infer<typeof updateBalanceSchema>;