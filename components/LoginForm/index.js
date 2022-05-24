import Image from "next/image";

import styles from "../../styles/LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <Image
        src="/light-logo.png"
        alt="Notify logo"
        width={298}
        height={65}
        objectFit="contain"
      />

      <div className={styles.form}>
        <button className={styles.googleButton}> Entra con Google </button>
        <div className={styles.separator}>o entra de forma anónima</div>
        <input
          className={styles.anonymousInput}
          placeholder="Escribe tu nombre secreto"
        />
        <button className={styles.anonymousButton}>
          {" "}
          Entrar anónimamente{" "}
        </button>
      </div>
    </div>
  );
}
