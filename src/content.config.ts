import { defineCollection, z } from 'astro:content';

const patterns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    dot: z.enum(['gold', 'blue']),
    order: z.number(),
    category: z.enum(['problem', 'pattern']),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { patterns };
