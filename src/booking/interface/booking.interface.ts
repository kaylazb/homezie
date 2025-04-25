import { BookingSeat, Payment } from '@prisma/client';

export interface BookingInterface {
  id: string;
  user_id: string;
  schedule_id: string;
  total_amount: number;
  status: string;
  created_at: Date;

  seats: BookingSeat[];
  payment?: Payment;
}