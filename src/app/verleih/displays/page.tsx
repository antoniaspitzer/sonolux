import Image from "next/image";
import Link from "next/link";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import styles from "../verleih.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function DisplayVerleihPage() {
  // Filtert nach "dispalys" UND sortiert nach createdAt (neueste zuerst)
  const response = await fetchStrapi(
    "verleihs?filters[type][$eq]=displays&sort=createdAt:desc&populate=*"
  );
  const items = response?.data || [];

  return (
    <div className={styles.container}>
      <h1>Displays</h1>

      <div className={styles.sectionsWrapper}>
        {items.map((item: any) => {
          const { id, title, slug, description, pictures } = item;
          
          const imageUrl = getStrapiMedia(pictures?.[0]?.url);

          return (
            <div key={id} className={styles.card}>
              <div className={styles.texts}>
                <h2>{title}</h2>

                {description && <BlocksRenderer content={description} />}

                <Link href={`/verleih/displays/${slug || id}`} className="orange-btn">
                  Hier zu {title}
                </Link>
              </div>

              {imageUrl && (
                <div className={styles.images}>
                  <Image
                    src={imageUrl}
                    alt={title || "Display Bild"}
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