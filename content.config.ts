import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  href: z.string().optional(),
  role: z.string().optional(),
  period: z.string().optional(),
  order: z.number().optional(),
  featured: z.boolean().optional().default(false),
});

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published: z.string(),
        edited: z.string(),
        draft: z.boolean(),
        tags: z.array(z.string()),
      }),
    }),
    notableWorks: defineCollection({
      type: "data",
      source: "notable-works.yml",
      schema: z.object({
        projects: z.array(projectSchema),
      }),
    }),
  },
});
