import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1>Franz Spitzer</h1><br/>

                <p><em>Gründer der Sonolux GmbH</em></p>

                <p>
                Franz Spitzer ist ein alter Mann. Dadurch, dass er so alt ist, hat er viel supi Erfahrungen gesammelt. Aber weil er eben ein alter Mann ist braucht er oftmals Hilfe von seiner super tollen Tochter. Und manchmal auch vom Fabi.
                <br/><br/>
                Er ist ein professioneller, krasser Dude. Er macht Tontechnik besser als jeder andere Dude. Nur bei Lichttechnik ist Fabi besser. Er ist fleißig und auch oft übermüdet. Er legt sich ins Zeug, sodass auch deine Veranstaltung funktioniert! Angefangen hat alles mit einem Digico Kurs. Papa wurde verzaubert. Dann hat er angefangen. Seit 3 Jahrzehnten macht er das jetzt. Also vertrau ihm, er kennt sich aus. Nur wenn er recht an stress hat is er manchmal sehr schweigsam. Ansonsten kann man gut mit ihm ratschen.
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
    </>
  );
};