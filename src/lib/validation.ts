import { z } from 'zod';

// Pakistani phone number: starts with 03 or +92, 10-11 digits
const phoneRegex = /^(\+92|0)?3\d{9}$/;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid Pakistani phone number (e.g., 03001234567)')
    .or(z.literal('')),
  subject: z.string().min(2, 'Subject is required'),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const orderFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid phone number (e.g., 03001234567)'),
  deliveryArea: z.string().min(2, 'Delivery area is required'),
  product: z.string().min(1, 'Please select a product'),
  quantity: z.coerce.number().min(1, 'Minimum quantity is 1').max(100, 'Maximum quantity is 100'),
  preferredTime: z.string().optional(),
  notes: z.string().optional(),
});

export const applicationFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid phone number (e.g., 03001234567)'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please describe your experience'),
  coverMessage: z.string().min(20, 'Cover message must be at least 20 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type OrderFormValues = z.infer<typeof orderFormSchema>;
export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;
