import { z } from 'zod'

// CreateTransferDto: Digunakan saat membuat transfer baru
export const createTransferSchema = z.object({
  from_wallet_id: z.string().uuid(),
  to_wallet_id: z.string().uuid(),
  amount: z.number().int().positive(),
  reference: z.string().min(1),
})


export const updateTransferSchema = createTransferSchema.partial();

export type CreateTransferDto = z.infer<typeof createTransferSchema>
export type UpdateTransferDto = z.infer<typeof updateTransferSchema>