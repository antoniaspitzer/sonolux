import Image from "next/image";
import styles from "./vorschau.module.css";

export default function Events() {
  return (
    <main className={styles.container}>
      {/* Header Bereich */}
      <section className={styles.header}>
        <h1>Veranstaltungstechnik</h1>
        <p>
          Bei diesen Veranstaltungen waren wir dabei!
          <br />
          Machen Sie sich ein eigenes Bild von dem breiten Angebot, das wir Ihnen bieten.
        </p>
      </section>

      {/* Großes Banner-Bild oben */}
      <div className={styles.heroImage}>
        <Image
          src="/images/statisch1.jpeg"
          alt="Veranstaltungstechnik Banner"
          width={1200}
          height={500}
          priority
        />
      </div>

      {/* Textblöcke oben */}
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

      {/* 2-Spalten Bildergalerie */}
      <div className={styles.twoColumnGrid}>
        <div className={styles.gridImageWrapper}>
          <Image
            src="/images/statisch1.jpeg"
            alt="Event Eindruck 1"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.gridImageWrapper}>
          <Image
            src="/images/statisch1.jpeg"
            alt="Event Eindruck 2"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Textblock unter den 2 Bildern */}
      <div className={styles.textBlock}>
        <p>
          Dank unseres umfangreichen Equipments können wir flexibel auf alle Wünsche eingehen. 
          Von kleinen Akustik-Gigs bis hin zu großen Festivalbühnen ist alles machbar.
        </p>
      </div>

      {/* Einblicke Sektion */}
      <section className={styles.gallerySection}>
        <h3>Einblicke ...</h3>

        <div className={styles.galleryGrid}>
          {/* Zeile 1: 3 quadratische Bilder */}
          <div className={styles.rowThree}>
            <div className={styles.squareImage}>
              <Image src="/images/statisch1.jpeg" alt="Einblick 1" width={400} height={400} />
            </div>
            <div className={styles.squareImage}>
              <Image src="/images/statisch1.jpeg" alt="Einblick 2" width={400} height={400} />
            </div>
            <div className={styles.squareImage}>
              <Image src="/images/statisch1.jpeg" alt="Einblick 3" width={400} height={400} />
            </div>
          </div>

          {/* Zeile 2: 1 breites Panorama-Bild */}
          <div className={styles.fullWidthImage}>
            <Image src="/images/statisch1.jpeg" alt="Einblick Saal" width={1200} height={450} />
          </div>

          {/* Zeile 3: 3 quadratische Bilder */}
          <div className={styles.rowThree}>
            <div className={styles.squareImage}>
              <Image src="/images/statisch1.jpeg" alt="Einblick 4" width={400} height={400} />
            </div>
            <div className={styles.squareImage}>
              <Image src="/images/statisch1.jpeg" alt="Einblick 5" width={400} height={400} />
            </div>
            <div className={styles.squareImage}>
              <Image src="/images/statisch1.jpeg" alt="Einblick 6" width={400} height={400} />
            </div>
          </div>

          {/* Zeile 4: Gemischtes Grid (Großes Hochformat links + 2 kleine rechts) */}
          <div className={styles.mixedRow}>
            <div className={styles.largeImage}>
              <Image src="/images/statisch1.jpeg" alt="Einblick Mischpult" width={800} height={800} />
            </div>
            <div className={styles.stackedImages}>
              <div className={styles.squareImage}>
                <Image src="/images/statisch1.jpeg" alt="Einblick 7" width={400} height={400} />
              </div>
              <div className={styles.squareImage}>
                <Image src="/images/statisch1.jpeg" alt="Einblick 8" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}