import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";
import Contact from "@/components/Contactform/Contactform";

export default function About() {
  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1>Franz Spitzer</h1><br/>

                <p><em>Gründer der Sonolux GmbH</em></p>

                <p>
                Franz Spitzer verbindet langjährige Erfahrung mit einer großen Faszination für Ton, Licht und Veranstaltugnstechnik. Seine Leidenschaft für Eventtechnik begann mit dem Filmen und Schneiden von Hochzeiten und verschiedenen Veranstaltungen. Im Laufe der Jahre entwickelte sich daraus zunehmend seine Begeisterung für die Welt der Ton- und Lichttechnik. Auch seine Tätigkeit im Spielraum hat diese Begeisterung weiter verstärkt.
                <br/><br/>
                Durch seine langjährige Erfahrung als Ton- und Lichttechniker konnte Franz umfassendes Wissen und praktische Erfahrung sammeln, die er bei jedem Projekt professionell einsetzt. Dabei zeichnet ihn besonders seine spontane, hilfsbereite und erfahrene Art aus. Auch wenn einmal etwas nicht ganz nach Plan läuft, bewahrt er einen kühlen Kopf und findet schnell die bestmögliche Lösung.
                </p><br/><br/>
            </div>

            <div className={styles.right}>
                <div className={styles.imageWrapper}>
                    <Image
                    src="/images/statisch6.jpeg" 
                    alt="beispielfoto"
                    width={220}
                    height={40}
                    priority
                    />
                </div>
            </div>

        </div>

        <Contact />
    </>
  );
};