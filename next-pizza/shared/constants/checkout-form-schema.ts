import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  lastName: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().min(2, { message: 'Enter correct email' }),
  phone: z.string().min(10, { message: 'Enter correct phone number' }),
  address: z.string().min(5, { message: 'Enter correct address' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
