import { z } from 'zod';

export const createPaymentSchema = z.object({
  booking_id: z.string().uuid(),
  amount: z.number().int(),
  status: z.string(), // Contoh: "PAID", "PENDING", "FAILED"
});

// Biasanya created_at dan id tidak diisi saat create, karena otomatis oleh database.

export type CreatePaymentDto = z.infer<typeof createPaymentSchema>;
export const updatePaymentSchema = createPaymentSchema.partial();

export type UpdatePaymentDto = z.infer<typeof updatePaymentSchema>;