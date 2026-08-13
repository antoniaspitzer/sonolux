import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Hilfsfunktion zum Laden der Daten
async function getVorschauBySlug(slug: string) {
  try {
    const data = await fetchStrapi(`events?filters[slug][$eq]=${slug}&populate=*`);
    return data?.data?.[0] || null;
  } catch (error) {
    console.error("Fehler beim Laden von Strapi:", error);
    return null;
  }
}

export default async function VorschauDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const item = await getVorschauBySlug(resolvedParams.slug);

  // Wenn kein Item gefunden wurde -> 404
  if (!item) {
    notFound();
  }

  const { title, description, images, pictures } = item;
  const mediaList = images || pictures || [];

  return (
    <main style={{ margin: "5rem ", padding: "0 1.5rem", color: "#fff" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>{title}</h1>

      {/* Hauptbeschreibung / Rich-Text */}
      <div style={{ lineHeight: "1.7", marginBottom: "3rem" }}>
        {Array.isArray(description) ? (
          <BlocksRenderer content={description} />
        ) : (
          <p>{description}</p>
        )}
      </div>

      {/* Galerie aller weiteren Bilder des Artikels */}
      {Array.isArray(mediaList) && mediaList.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {mediaList.map((img: any, idx: number) => {
            const imgUrl = getStrapiMedia(img?.url);
            if (!imgUrl) return null;

            return (
              <div key={img.id || idx} style={{ borderRadius: "12px", overflow: "hidden" }}>
                <Image
                  src={imgUrl}
                  alt={title || `Detailbild ${idx + 1}`}
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
                />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}