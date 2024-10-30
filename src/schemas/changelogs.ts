import { z } from "astro:schema";

export const changelogsSchema = z.object({
	link: z.string(),
	productName: z.string(),
	productLink: z.string(),
	productArea: z.string(),
	productAreaLink: z.string(),
	entries: z
		.object({
			publish_date: z.string(),
			title: z.string().optional(),
			scheduled: z.boolean().optional(),
			scheduled_date: z.string().optional(),
		})
		.and(
			z
				.object({
					individual_page: z.boolean(),
					link: z.string(),
				})
				.or(
					z.object({
						description: z.string(),
					}),
				),
		)
		.array(),
});
