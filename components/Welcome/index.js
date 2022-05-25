import styles from "../../styles/Welcome.module.css";

export default function Welcome({ username }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        ¡Hola, &nbsp;<b>{username}</b>! 👋🏼
      </h1>
      <h2 className={styles.subtitle}>
        Todas tus notas están aquí, ¡en un solo lugar!
      </h2>
    </div>
  );
}
