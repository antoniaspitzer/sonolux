import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ImageSlider from "@/components/Slider/Slider"; // <-- Importieren

export default async function Home() {
  const response = await fetchStrapi(
    "homepage?populate[Slider][populate]=*&populate[block][populate]=*"
  );
  
  const data = response?.data || {};
  const { title, description, Slider, vorschautitle, block } = data;

  // Lade alle Bild-URLs aus Strapi
  const rawFiles = Slider?.files || (Array.isArray(Slider) ? Slider.flatMap((s: any) => s.files || s) : []);
  const sliderImages = (Array.isArray(rawFiles) ? rawFiles : [rawFiles])
    .filter(Boolean)
    .map((file: any) => ({
      id: file?.id,
      url: getStrapiMedia(file?.url) || "",
      alt: file?.name || "Slider Bild",
    }))
    .filter((img) => img.url !== "");

  return (
    <>
      <h1>{title || "Eventtechnik"}</h1>
      <br />

      {Array.isArray(description) ? (
        <BlocksRenderer content={description} />
      ) : (
        <p>{description}</p>
      )}
      <br />
      <br />

      {/* --- DER NEUE PFEIL-SLIDER --- */}
      {sliderImages.length > 0 && <ImageSlider images={sliderImages} />}
      <br />

      <h1>{vorschautitle || "Vorschau"}</h1>
      <br />
      <br />

      <div className={styles.cards}>
        {Array.isArray(block) &&
          block.map((card: any, index: number) => {
            const cardImgUrl = getStrapiMedia(card?.vorschauBild?.url);
            const cardText = card?.vorschauText;

            return (
              <div key={card.id || index} className={styles.card}>
                {cardImgUrl && (
                  <Image
                    src={cardImgUrl}
                    alt={cardText || "Vorschau Bild"}
                    width={400}
                    height={300}
                    priority
                  />
                )}
                {cardText && <p>{cardText}</p>}
              </div>
            );
          })}
      </div>

      <br />
      <br />

      {/* =========================================================
          STATISCHER TEIL (UNVERÄNDERT)
         ========================================================= */}

      <div className={styles.verleihSection}>
        <div className={styles.verleihSectionText}>
          <h1>Verleih</h1>

          <h3>Ton & Licht</h3>
          <p>Egal ob Ton oder Lichttechnik, wir haben alles, was Sie brauchen!</p>

          <h3>Displays & Beamer</h3>
          <p>Für Ihre Veranstaltungen haben wir die passenden Screens! Auch für public viewing.</p>

          <h3>Film & Schnitt</h3>
          <p>
            Auch sind wir gelegentlich für Ton und Bild aufnahmen verantwortlich.
            Wir schneiden Ihre Ballettaufführung und machen DVDs
          </p>

          <Link href="/verleih" className={styles.orangeBtn}>
            Hier geht's zum Verleih!
          </Link>
        </div>

        <div className={styles.verleihSectionBild}>
          <div className={styles.verleih}>
            <Image
              src="/images/statisch4.jpeg"
              alt="beispielfoto"
              width={220}
              height={40}
              priority
            />
          </div>
        </div>
      </div>

      <h1>Über uns</h1>
      <br />

      <div className={styles.überuns}>
        <Image
          src="/images/statisch5.jpeg"
          alt="beispielfoto"
          width={220}
          height={40}
          priority
        />
      </div>

      <h3>Sonolux</h3>
      <p>
        Wir helfen Ihnen dabei Ihre Veranstaltungen zum Leben zu erwecken. Mit
        unserem Engagement und vielseitigem Wissen möchten wir Sie tatkräftig
        unterstützen.
      </p>
      <br />

      <div className={styles.kontakt}>
        <h1>Trete mit uns in Kontakt!</h1>
        <Link href="/kontakt" className="orange-btn">
          Kontakt
        </Link>
        <Link href="/contact" className="white-btn">
          E-Mail schreiben
        </Link>
      </div>
    </>
  );
}