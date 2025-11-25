import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().default('Ez2Fix Team'),
        image: z.string().optional(),
        category: z.enum(['repair-guides', 'maintenance-tips', 'installation-guides', 'company-news']),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
