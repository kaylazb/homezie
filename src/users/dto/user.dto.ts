import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
  phone_number: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, { message: 'Invalid Indonesian phone number' }),
  created_by: z.string().optional(),
  created_at: z.string().datetime().optional(),
  failed_password: z.number().optional()

});

export type CreateUserDto = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
