import { z } from "zod";

export const directorySchema = (imageSchema: z.ZodTypeAny) =>
  z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
    image: imageSchema.optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    languages: z.array(z.string()).optional(),
    specialties: z.array(z.string()).optional(),
    hours: z.string().optional(),
    representative: z.string().optional(),
    founded: z.string().optional(),
    credentials: z.array(z.string()).optional(),
    google_rating: z.number().optional(),
    google_reviews: z.number().optional(),
    highlights: z.array(z.string()).optional(),
  });