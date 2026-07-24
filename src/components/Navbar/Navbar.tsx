import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navLinks} ${styles.navLeft}`}>
        <Link href="/vorschau">Vorschau</Link>
        <Link href="/verleih">Verleih</Link>
      </div>

      <div className={styles.navLogo}>
        <Link href="/">
          <Image 
            src="/sonolux-logo.png" 
            alt="sonolux GmbH Logo" 
            width={220} 
            height={40} 
            priority
          />
        </Link>
      </div>

      <div className={`${styles.navLinks} ${styles.navRight}`}>
        <Link href="/about">About</Link>
        <Link href="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}