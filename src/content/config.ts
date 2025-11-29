import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('InfraDev'),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

const caseStudyCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('InfraDev'),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
		client: z.string().optional(),
		category: z.string().optional(),
		results: z.array(z.object({
			metric: z.string(),
			value: z.string(),
		})).optional(),
	}),
});

export const collections = {
	blog: blogCollection,
	'case-study': caseStudyCollection,
};

