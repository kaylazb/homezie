// src/user/dto/create-user.schema.ts
import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
  phone_number: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, { message: 'Invalid Indonesian phone number' }),

  profile_picture: z.string().optional(),
  gender: z.string().optional(),
  birthdate: z.string().datetime({ message: 'Invalid birthdate' }).optional(),
  address: z.string().optional(),

  role: z.enum(['ADMIN', 'CUSTOMER', 'DRIVER']).optional(),

  device_type: z.string().optional(),
  device_id: z.string().optional(),
  last_ip: z.string().optional(),
  last_location: z.string().optional(),
  socket_id: z.string().optional(),
  fcm_token: z.string().optional(),
});

// auto generate Type dari Zod Schema
export type CreateUserDto = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
