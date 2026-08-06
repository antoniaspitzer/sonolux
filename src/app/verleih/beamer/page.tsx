import Image from "next/image";
import Link from "next/link";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import styles from "./verleih.module.css";

export default async function VerleihPage() {
  // populate=* sorgt dafür, dass Strapi auch das Bild mitschickt!
  const response = await fetchStrapi("verleihs?populate=*");
  const items = response.data;

  return (
    <div className={styles.container}>
      <h1>Verleih Angebote</h1>

      <div className={styles.sectionsWrapper}>
        {items.map((item: any) => {
          const { title, slug, description, image } = item.attributes;
          const imageUrl = getStrapiMedia(image?.data?.attributes?.url);

          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.texts}>
                <h2>{title}</h2>
                <p>{description}</p>
                {/* Dynamischer Link basierend auf dem Strapi-Slug */}
                <Link href={`/verleih/${slug}`} className="orange-btn">
                  Hier zu {title}
                </Link>
              </div>

              {imageUrl && (
                <div className={styles.images}>
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={600}
                    height={400}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}