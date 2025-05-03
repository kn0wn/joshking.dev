import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

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
  },
});
