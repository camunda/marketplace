import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One directory per listing: src/content/listings/<type>s/<slug>/listing.md
 * The directory path carries type and slug. All frontmatter fields beyond
 * id/name/description are optional and omitted when empty.
 */
const listings = defineCollection({
  loader: glob({ pattern: '**/listing.md', base: './src/content/listings' }),
  schema: z.object({
    // Identity
    id: z.number(), // original AppDirect product id, kept for stable URLs/redirects
    name: z.string(),
    // Old AppDirect URL slug (/apps/<id>/<slug>), set only when it differs
    // from the directory slug. Used for redirect pages.
    legacySlug: z.string().optional(),
    // Only set when a listing belongs to more than one type; otherwise the
    // parent directory (connectors/ blueprints/ solutions/) is the type.
    type: z.array(z.enum(['connector', 'blueprint', 'solution'])).optional(),

    // Creator
    creatorType: z.enum(['camunda', 'partner', 'community']).optional(),
    creatorName: z.string().optional(),
    creatorUrl: z.string().optional(),

    // Filter facets
    categories: z.array(z.string()).default([]),
    industries: z.array(z.string()).default([]),
    useCases: z.array(z.string()).default([]),
    resourceTypes: z.array(z.string()).default([]),
    bpmnTypes: z.array(z.string()).default([]),
    runtimes: z.array(z.enum(['bundle', 'self-hosted'])).default([]),
    connectorTypes: z.array(z.enum(['inbound', 'outbound'])).default([]),
    compatibleVersions: z.array(z.string()).default([]),
    availability: z.enum(['open-source', 'listing-only', 'coming-soon']).optional(),

    // Content
    description: z.string(), // 5-word description, shown on cards and in search
    seoDescription: z.string().optional(), // brief overview, used as the meta description

    // Action targets
    templates: z
      .array(z.object({ url: z.string(), id: z.string().optional(), name: z.string().optional() }))
      .default([]),
    saasTemplate: z.string().optional(), // only when different from the templates
    smTemplate: z.string().optional(),
    video: z.string().optional(), // YouTube/Vimeo URL; provider and id are parsed at build

    // Links (only set keys appear)
    links: z
      .object({
        github: z.string().optional(),
        docs: z.string().optional(),
        preview: z.string().optional(),
        demo: z.string().optional(),
        support: z.string().optional(),
        website: z.string().optional(),
      })
      .default({}),
    resources: z
      .array(z.object({ url: z.string(), type: z.string().optional(), title: z.string().optional() }))
      .default([]),

    // Audit
    lastModified: z.string().optional(),
  }),
});

export const collections = { listings };
