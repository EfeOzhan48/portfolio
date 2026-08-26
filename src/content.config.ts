import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const BLOG_PATH = "src/content/posts";

const blogSchema = ({ image }: { image: any }) =>
  z.object({
    author: z.string().default("Durmuş Efe Özhan"),
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: image().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
    readingTime: z.string().optional(),
    hideEditPost: z.boolean().optional(),
    timezone: z.string().optional(),
  });

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: blogSchema,
});

export const collections = { posts };