import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Trennlinie ganz oben */}
      <div className={styles.divider} />

      <div className={styles.container}>
        {/* Linke Spalte: Logo & Social Icons */}
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <span className={styles.logoOrange}>sonolux</span>{" "}
            <span className={styles.logoWhite}>GmbH</span>
          </div>
        </div>

        {/* Rechte Spalten: Navigation & Kontakt */}
        <div className={styles.linksWrapper}>
          {/* Spalte: Mehr über uns */}
          <div className={styles.column}>
            <h4>Mehr über uns</h4>
            <ul>
              <li><Link href="/geschichte">Geschichte</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
            </ul>
          </div>

          {/* Spalte: Kontakt */}
          <div className={styles.column}>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:+436648592765">T: +43 664 8592765</a></li>
              <li><a href="mailto:office@sonolux.at">office@sonolux.at</a></li>
              <li><span>4673 Gaspoltshofen</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}