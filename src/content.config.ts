import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  author: z.string().default("Durmuş Efe Özhan"),
  pubDatetime: z.date(),
  modDatetime: z.date().optional().nullable(),
  title: z.string(),
  featured: z.boolean().optional(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default(["thoughts"]),
  description: z.string(),
  canonicalURL: z.string().optional(),
  readingTime: z.string().optional(),
});

// Projeler (Port Scanner, Serpens Game vb.)
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: blogSchema,
});

// Thoughts (Gündelik yazılar, fikirler, notlar)
const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/thoughts" }),
  schema: blogSchema,
});

export const collections = { posts, thoughts };