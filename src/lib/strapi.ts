const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    cache: "no-store", // Oder { next: { revalidate: 60 } } für Caching
  });

  if (!res.ok) {
    throw new Error(`Fehler beim Laden von Strapi: ${res.statusText}`);
  }

  return res.json();
}

// Hilfsfunktion für Bild-URLs (da Strapi nur relative Pfade liefert)
export function getStrapiMedia(url: string | null) {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}