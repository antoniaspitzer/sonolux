import Link from "next/link";
import Image from "next/image";
import styles from "./verleih.module.css";
import Contact from "@/components/Contactform/Contactform";

export default function Verleih() {
  return (
    <main className={styles.container}>
      {/* Hero Banner mit Hintergrundbild */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Verleih</h1>
          <p>
            Verleih von Fernsehern, Beamern, Kameras, Tonanlagen, Lichtanlagen
            und vieles mehr!
          </p>
        </div>
      </section>

      {/* Sektion mit allen Verleih-Karten */}
      <section className={styles.sectionsWrapper}>
        {/* 1. Displays (Text links, Bild rechts) */}
        <div className={styles.card}>
          <div className={styles.texts}>
            <h2>Displays</h2>
            <p>
              Alle Arten und Größen! Egal ob von Samsung oder Philipps. Größen von
              bis zu 98 Zoll ausleihen.
            </p>
            <Link href="/displays" className="orange-btn">
              Hier zu den Displays
            </Link>
          </div>
          <div className={styles.images}>
            <Image
              src="/images/statisch1.jpeg"
              alt="Displays Verleih"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>

        {/* 2. Beamer (Bild links, Text rechts) */}
        <div className={styles.card}>
          <div className={styles.images}>
            <Image
              src="/images/statisch1.jpeg"
              alt="Beamer Verleih"
              width={600}
              height={400}
            />
          </div>
          <div className={styles.texts}>
            <h2>Beamer</h2>
            <p>
              Ob für draußen oder drinnen, mit unseren Beamern kann nichts schief
              gehen!
            </p>
            <Link href="/beamer" className="orange-btn">
              Hier zu den Beamern
            </Link>
          </div>
        </div>

        {/* 3. Licht (Text links, Bild rechts) */}
        <div className={styles.card}>
          <div className={styles.texts}>
            <h2>Licht</h2>
            <p>
              Egal ob Moving Heads oder Ambient Light. Wir haben die perfekten
              Lichter für Ihre Location!
            </p>
            <Link href="/lightning" className="orange-btn">
              Hier zu den Lichtern
            </Link>
          </div>
          <div className={styles.images}>
            <Image
              src="/images/statisch1.jpeg"
              alt="Lichttechnik Verleih"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* 4. Mikrofone (Bild links, Text rechts) */}
        <div className={styles.card}>
          <div className={styles.images}>
            <Image
              src="/images/statisch1.jpeg"
              alt="Mikrofone Verleih"
              width={600}
              height={400}
            />
          </div>
          <div className={styles.texts}>
            <h2>Mikrofone</h2>
            <p>
              Egal ob Open Air oder Orchestersaal, wir haben die passenden
              Mikrofone für Sie!
            </p>
            <Link href="/mikrofone" className="orange-btn">
              Hier zu den Mikrofonen
            </Link>
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <Contact />
    </main>
  );
}