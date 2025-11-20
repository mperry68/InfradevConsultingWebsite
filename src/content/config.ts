import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('InfraDev Consulting'),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};

