
import { z } from 'zod'

export const styleAdvisorRequestSchema = z.discriminatedUnion('mode', [
  z.object({
    mode: z.literal('outfit'),
    prompt: z.string().trim().min(1).max(1000),
  }),

  z.object({
    mode: z.literal('owned-item'),
    itemDescription: z.string().trim().min(1).max(500),
    occasion: z.string().trim().min(1).max(100),
  }),

  z.object({
    mode: z.literal('find-product'),
    category: z.enum([
      'Outerwear',
      'Tops',
      'Trousers',
      'Footwear',
      'Any category',
    ]),
    color: z.string().trim().max(100),
    maxPrice: z.number().finite().nonnegative(),
  }),

  z.object({
    mode: z.literal('pair-product'),
    productId: z.string().trim().min(1).max(100),
  }),

  z.object({
    mode: z.literal('three-outfits'),
    itemDescription: z.string().trim().min(1).max(500),
    preferences: z.string().trim().max(500).optional(),
  }),
])
