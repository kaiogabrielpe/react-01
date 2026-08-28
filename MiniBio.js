import styles from "./MiniBio.module.css";

export default function MiniBio({ photoLabel, name, phrase }) {
  return (
    <div className={styles.inner}>
      <div className={styles.photo}>{photoLabel}</div>
      <p className={styles.name}>{name}</p>
      <p className={styles.phrase}>{phrase}</p>
    </div>
  );
}
