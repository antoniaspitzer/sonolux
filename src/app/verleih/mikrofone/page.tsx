import Image from "next/image";
import Link from "next/link";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import styles from "../verleih.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function MikrofoneVerleihPage() {
  // Filtert nach "mikrofone" UND sortiert nach createdAt (neueste zuerst)
  const response = await fetchStrapi(
    "verleihs?filters[type][$eq]=mikrofone&sort=createdAt:desc&populate=*"
  );
  const items = response?.data || [];

  return (
    <div className={styles.container}>
      <h1>Mikrofone</h1>

      <div className={styles.sectionsWrapper}>
        {items.map((item: any) => {
          const { id, title, slug, description, pictures } = item;
          
          const imageUrl = getStrapiMedia(pictures?.[0]?.url);

          return (
            <div key={id} className={styles.card}>
              <div className={styles.texts}>
                <h2>{title}</h2>

                {description && <BlocksRenderer content={description} />}

              </div>

              {imageUrl && (
                <div className={styles.images}>
                  <Image
                    src={imageUrl}
                    alt={title || "Mikrofone Bild"}
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