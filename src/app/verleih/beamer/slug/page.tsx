import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Holen der Daten basierend auf dem Slug aus der URL
async function getVerleihBySlug(slug: string) {
  const data = await fetchStrapi(`verleihs?filters[slug][$eq]=${slug}&populate=*`);
  return data?.data?.[0]; // Das erste gefundene Element
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15+ müssen params geseufzt/geawaited werden
  const resolvedParams = await params;
  const item = await getVerleihBySlug(resolvedParams.slug);

  // Falls es den Eintrag in Strapi nicht gibt -> 404 Seite
  if (!item) {
    notFound();
  }

  // Strapi v5: Felder liegen direkt auf `item` (ohne .attributes)
  const { title, description, pictures } = item;
  const imageUrl = getStrapiMedia(pictures?.[0]?.url);

  return (
    <main style={{ maxWidth: "1000px", margin: "4rem auto", padding: "0 1rem" }}>
      <h1>{title}</h1>

      {/* Rich-Text mit Strapi BlocksRenderer */}
      {description && <BlocksRenderer content={description} />}

      {imageUrl && (
        <div style={{ marginTop: "2rem" }}>
          <Image
            src={imageUrl}
            alt={title || "Verleih Bild"}
            width={800}
            height={500}
            style={{ borderRadius: "12px", objectFit: "cover", width: "100%", height: "auto" }}
          />
        </div>
      )}
    </main>
  );
}