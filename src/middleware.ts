import { defineMiddleware } from 'astro:middleware';

/**
 * Dev-server convenience: serve /api/v1/connectors as /api/v1/connectors.json.
 * Lets Camunda Hub point at localhost:4321 without code changes.
 * Production (GitHub Pages) has no rewrites; the extensionless files are
 * emitted at build time by scripts/postbuild.mjs instead.
 */
export const onRequest = defineMiddleware((context, next) => {
  if (import.meta.env.DEV) {
    const { pathname } = context.url;
    if (pathname.startsWith('/api/') && !pathname.endsWith('.json')) {
      return context.rewrite(`${pathname}.json`);
    }
  }
  return next();
});
