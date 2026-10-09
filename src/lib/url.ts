/** Prefix an internal path with the configured base (needed for GitHub Pages
 *  project sites and PR previews, which live under a subdirectory). */
export function u(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
}
