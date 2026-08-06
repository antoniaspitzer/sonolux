import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import Image from "next/image";
import { notFound } from "next/navigation";

// Holen der Daten basierend auf dem Slug aus der URL
async function getVerleihBySlug(slug: string) {
  const data = await fetchStrapi(`verleihs?filters[slug][$eq]=${slug}&populate=*`);
  return data.data[0]; // Das erste gefundene Element
}

export default async function DetailPage({ params }: { params: { slug: string } }) {
  const item = await getVerleihBySlug(params.slug);

  // Falls es den Slug in Strapi nicht gibt -> 404 Seite
  if (!item) {
    notFound();
  }

  const { title, description, image } = item.attributes;
  const imageUrl = getStrapiMedia(image?.data?.attributes?.url);

  return (
    <main style={{ maxWidth: "1000px", margin: "4rem auto", padding: "0 1rem" }}>
      <h1>{title}</h1>
      <p>{description}</p>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={500}
          style={{ borderRadius: "12px", objectFit: "cover", width: "100%" }}
        />
      )}
    </main>
  );
}