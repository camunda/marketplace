import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '**/listing.md', base: './src/content/listings' }),
  schema: z.object({
    // Identity
    id: z.number(), // original AppDirect product id, kept for stable URLs/redirects
    slug: z.string(),
    name: z.string(),
    type: z.array(z.enum(['connector', 'blueprint', 'solution'])),

    // Creator
    creatorType: z.enum(['camunda', 'partner', 'community']).nullable(),
    creatorName: z.string().nullable(),
    creatorUrl: z.string().nullable(),

    // Filter facets (merged AppDirect tag groups; "Application" duplicates
    // the category children and is dropped on import)
    categories: z.array(z.string()),
    industries: z.array(z.string()),
    useCases: z.array(z.string()),
    resourceTypes: z.array(z.string()),
    bpmnTypes: z.array(z.string()),
    runtimes: z.array(z.enum(['bundle', 'self-hosted'])),
    compatibleVersions: z.array(z.string()),
    availability: z.enum(['open-source', 'listing-only', 'coming-soon']).nullable(),

    // Content
    description: z.string(),
    tagline: z.string().nullable(),

    // Call-to-action targets
    templates: z.array(z.object({ id: z.string().nullable(), name: z.string().nullable(), url: z.string() })),
    saasTemplate: z.string().nullable(),
    smTemplate: z.string().nullable(),
    githubRepo: z.string().nullable(),
    docsUrl: z.string().nullable(),
    previewImage: z.string().nullable(),
    demoRequestUrl: z.string().nullable(),
    demoVideo: z.object({ provider: z.string(), id: z.string().optional(), url: z.string() }).nullable(),

    // Media (files in the listing directory, served at /listings/<slug>/assets/)
    icon: z.string().nullable(),
    heroImage: z.string().nullable(),
    screenshots: z.array(z.string()),

    // Links
    resources: z.array(z.object({ type: z.string().nullable(), title: z.string().nullable(), url: z.string() })),
    supportUrl: z.string().nullable(),
    referUrl: z.string().nullable(),

    // Audit
    lastModified: z.string().nullable(),
  }),
});

export const collections = { listings };
