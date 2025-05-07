import { z } from "zod";


export const paginationSchema = z.object({
    
    limit: z.number(),
    page: z.number(),

  });
  
  // auto generate Type dari Zod Schema
  export type PaginationDto = z.infer<typeof paginationSchema>;