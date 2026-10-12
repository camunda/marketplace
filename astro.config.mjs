import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://marketplace.camunda.com',
  // Overridden for PR previews (subdirectory on the Pages site).
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // The DS barrel (index.js) re-exports ./icons, which imports a JSON
        // registry without `type: json` and crashes under Node. Its exports
        // map also blocks deep imports. Alias to the dist source so we can
        // import individual components and skip the broken icons barrel.
        '@camunda/design-system/components': new URL(
          './node_modules/@camunda/design-system/dist/src/components',
          import.meta.url,
        ).pathname,
      },
    },
  },
});
