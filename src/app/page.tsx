import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Eventtechnik</h1><br/>

      <p>
        Die Sonolux GmbH ist eine Firma die sich auf Veranstaltungstechnik vielseitig ausgelegt hat. Betrieben wird sie von Franz Spitzer. Diese Website dient dazu Ihnen einen Einblick in die Arbeit von Sonolux, und dahingehend von Franz Spitzer, zu bieten. 
      </p><br/><br/>

      {/* TODO 1: Bilder Karussel, derweil nur statisches Foto! */}

      <div className={styles.fotos}>
        <Image 
          src="/images/oebb.png" 
          alt="Öbb Firmenfeier" 
          width={220} 
          height={40} 
          priority
        />
      </div>
      <br/>

      <h1>Vorschau</h1><br/><br/>

      {/* TODO 2: Bilder Vorschau Cards!!! Derweil nur statische Fotos!!! */}

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src="/images/statisch1.jpeg"
            alt="beispielfoto"
            width={220}
            height={40}
            priority
          />
          <p>statisch1</p>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/statisch2.jpeg"
            alt="beispielfoto"
            width={220}
            height={40}
            priority
          />
          <p>statisch2</p>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/statisch3.jpeg"
            alt="beispielfoto"
            width={220}
            height={40}
            priority
          />
          <p>statisch3</p>
        </div>
      </div>

      <br/><br/>

      <div className={styles.verleihSection}>

        <div className={styles.verleihSectionText}>
          <h1>Verleih</h1>

          <h3>Ton & Licht</h3>
          <p>Egal ob Ton oder Lichttechnik, wir haben alles, was Sie brauchen!</p>

          <h3>Displays & Beamer</h3>
          <p>Für Ihre Veranstaltungen haben wir die passenden Screens! Auch für public viewing.</p>

          <h3>Film & Schnitt</h3>
          <p>Auch sind wir gelegentlich für Ton und Bild aufnahmen verantwortlich. Wir schneiden Ihre Ballettaufführung und machen DVDs</p>
          
          <Link href="/verleih" className={styles.orangeBtn}>Hier geht's zum Verleih!</Link>

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

      <h1>Über uns</h1><br/>

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
      <p>Wir helfen Ihnen dabei Ihre Veranstaltungen zum Leben zu erwecken. Mit unserem Engagement und vielseitigem Wissen möchten wir Sie tatkräftig unterstützen.</p>
      <br/>


      <div className={styles.kontakt}>
        <h1>Trete mit uns in Kontakt!</h1>
        <Link href="/kontakt" className="orange-btn">Kontakt</Link>
        <Link href="/contact" className="white-btn">E-Mail schreiben</Link>
      </div>
    </>
  );
}
