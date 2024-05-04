import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		top: z.boolean().optional(),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		allImage: z.array(z.object({ lang: z.string(), color: z.string() })).optional(),
		tech: z.array(z.string()).optional(),
		github: z.boolean().optional(),
		lien: z.string().optional(),
	}),
});

export const collections = { blog };
