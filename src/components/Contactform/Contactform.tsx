import styles from "./Contactform.module.css";

export default function Contactform() {
  return (
    <div className={styles.wrapper}>
      <h1>Kontakt</h1>

      <form action="#" method="POST" className={styles.form}>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="vorname">Vorname</label>
            <input 
              type="text" 
              name="vorname" 
              id="vorname" 
              placeholder="Jane" 
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="nachname">Nachname</label>
            <input 
              type="text" 
              name="nachname" 
              id="nachname" 
              placeholder="Smitherton" 
              required 
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">E-Mail Adresse</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="email@janesfakedomain.net" 
            required 
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="nachricht">Nachricht</label>
          <textarea 
            name="nachricht" 
            id="nachricht" 
            rows={6}
            placeholder="Enter your question or message"
            required
          ></textarea>
        </div>
        
        <div className={styles.buttonWrapper}>
          <button type="submit" className="orange-btn">Abschicken</button>
        </div>
      </form>
    </div>
  );
}