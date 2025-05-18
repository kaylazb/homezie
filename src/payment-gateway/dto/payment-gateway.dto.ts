import { z } from 'zod';

export const xenditDisbursementResponseSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    external_id: z.string(),
    amount: z.number(),
    bank_code: z.string(),
    account_holder_name: z.string(),
    disbursement_description: z.string().nullable().optional(),
    status: z.enum(['PENDING', 'COMPLETED', 'FAILED', 'RETURNED']),
    timestamp: z.string().datetime(), // ISO 8601 format
  });

export type XenditDisburstmentResponseDto = z.infer<typeof xenditDisbursementResponseSchema>;
