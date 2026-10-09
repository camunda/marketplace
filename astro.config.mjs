import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marketplace.camunda.com',
  // Overridden for PR previews (subdirectory on the Pages site).
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
});
