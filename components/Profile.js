import MiniBio from "./MiniBio";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.outer}>
      <h1 className={styles.title}>Mini Bio</h1>
      <MiniBio
        photoLabel="sua foto"
        name="Seu Nome"
        phrase="Uma frase sobre você."
      />
    </section>
  );
}
