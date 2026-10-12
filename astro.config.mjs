import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const DS_COMPONENTS = new URL(
  './node_modules/@camunda/design-system/dist/src/components',
  import.meta.url,
).pathname;

export default defineConfig({
  site: 'https://marketplace.camunda.com',
  // Overridden for PR previews (subdirectory on the Pages site).
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  integrations: [
    react({
      // The DS ships precompiled, sourcemap-less .js. rolldown-vite's
      // react-refresh wrapper (dev only) crashes on them with "Missing field
      // moduleType". The alias below points at absolute paths outside the
      // default node_modules exclusion, so exclude the DS explicitly. It is
      // only server-rendered (no client hydration), so Fast Refresh is
      // irrelevant for it.
      include: /src\/components\/.*\.[jt]sx$/,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // The DS barrel (index.js) re-exports ./icons, which imports a JSON
        // registry without `type: json` and crashes under Node. Its exports
        // map also blocks deep imports. Alias to the dist source so we can
        // import individual components and skip the broken icons barrel.
        '@camunda/design-system/components': DS_COMPONENTS,
      },
    },
  },
});
