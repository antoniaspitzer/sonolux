import Image from "next/image";
import Link from "next/link";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import styles from "../verleih.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function VerleihPage() {
  const response = await fetchStrapi("verleihs?populate=*");
  const items = response?.data || [];

  return (
    <div className={styles.container}>
      <h1>Verleih Angebote</h1>

      <div className={styles.sectionsWrapper}>
        {items.map((item: any) => {
          const { id, title, slug, description, pictures } = item;
          
          // Direktes Auslesen der Bild-URL
          const imageUrl = getStrapiMedia(pictures?.[0]?.url);

          return (
            <div key={id} className={styles.card}>
              <div className={styles.texts}>
                <h2>{title}</h2>

                {description && <BlocksRenderer content={description} />}

                <Link href={`/verleih/beamer/${slug || id}`} className="orange-btn">
                  Hier zu {title}
                </Link>
              </div>

              {imageUrl && (
                <div className={styles.images}>
                  <Image
                    src={imageUrl}
                    alt={title || "Verleih Bild"}
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