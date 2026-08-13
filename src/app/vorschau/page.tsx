import Image from "next/image";
import Link from "next/link";
import styles from "./vorschau.module.css";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";

export default async function Events() {
  // 1. Alle Vorschau-Artikel aus Strapi abrufen
  const response = await fetchStrapi("events?populate=*&sort=createdAt:desc");
  const items = response?.data || [];

  return (
    <main className={styles.container}>
      {/* Header Bereich */}
      <section className={styles.header}>
        <h1>Veranstaltungstechnik</h1>
        <p>
          Bei diesen Veranstaltungen waren wir dabei!
          <br />
          Machen Sie sich ein eigenes Bild von dem breiten Angebot, das wir Ihnen bieten.
        </p> <br/>
      </section>

      {/* Statisches Hero-Bild oben */}
      <div className={styles.heroImage}>
        <Image
          src="/images/statisch1.jpeg"
          alt="Veranstaltungstechnik Banner"
          width={1200}
          height={500}
          priority
        />
      </div>

      {/* Statischer Textblock */}
      <div className={styles.textBlock}>
        <p>
          Egal ob für eine Firmenfeier oder Open Air: Wir bieten modernste Ton- und Lichttechnik. 
          Unsere Systeme werden individuell an Ihre Location angepasst, um ein perfektes Sound- 
          und Lichterlebnis zu garantieren.
        </p>
        <p>
          Mit jahrzehntelanger Erfahrung planen und betreuen wir Ihr Event von A bis Z. 
          Verlässlichkeit und höchste Qualität stehen bei uns an erster Stelle.
        </p>
      </div>

      {/* 2-Spalten Bildergalerie (Statisch) */}
      <div className={styles.twoColumnGrid}>
        <div className={styles.gridImageWrapper}>
          <Image
            src="/images/statisch2.jpeg"
            alt="Event Eindruck 1"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.gridImageWrapper}>
          <Image
            src="/images/statisch3.jpeg"
            alt="Event Eindruck 2"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className={styles.textBlock}>
        <p>
          Dank unseres umfangreichen Equipments können wir flexibel auf alle Wünsche eingehen. 
          Von kleinen Akustik-Gigs bis hin zu großen Festivalbühnen ist alles machbar.
        </p>
      </div>

      {/* =========================================================
          DYNAMISCHE EINBLICKE SEKTION (STRAPI)
         ========================================================= */}
      <section className={styles.gallerySection}>
        <h1>Einblicke ...</h1>

        <div className={styles.galleryGrid}>
          {items.map((item: any) => {
            const { id, slug, vorschauImage, shortDescription, title } = item;
            
            // Bild-URL aus vorschauImage extrahieren
            const imageUrl = getStrapiMedia(vorschauImage?.url);
            const targetSlug = slug || id;

            return (
              <Link 
                key={id} 
                href={`/vorschau/${targetSlug}`} 
                className={styles.cardLink}
              >
                <div className={styles.previewCard}>
                  {imageUrl && (
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={imageUrl}
                        alt={title || "Vorschau Bild"}
                        width={400}
                        height={300}
                      />
                    </div>
                  )}
                  {shortDescription && (
                    <p className={styles.cardDescription}>{shortDescription}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}