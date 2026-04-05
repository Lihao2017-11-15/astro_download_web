import { defineCollection, z } from 'astro:content';

const softwareCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    version: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    downloadUrl: z.string(),
    publishDate: z.date(),
    updateDate: z.date(),
    author: z.string(),
    icon: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  software: softwareCollection,
};
