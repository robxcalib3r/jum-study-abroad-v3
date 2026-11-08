/**
 * Resolves a public asset path relative to the app base URL (useful for GitHub Pages deployments).
 * e.g., getAssetUrl('/images/hero-bg.jpg') -> '/jum-study-abroad-v3/images/hero-bg.jpg'
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : `${import.meta.env.BASE_URL}/`;
  return `${baseUrl}${cleanPath}`;
}
