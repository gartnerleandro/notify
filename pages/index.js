import Head from "next/head";
import Image from "next/image";

import LoginForm from "../components/LoginForm";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notify</title>
        <meta
          name="description"
          content="Guarda todas tus notas en una app simple e intuitiva"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.infoWrapper}>
          <div className={styles.infoContainer}>
            <Image
              src="/hombre-cafe.png"
              alt="Señor utilizando la app Notify"
              width={370}
              height={300}
              objectFit="contain"
            />
            <h1 className={styles.infoTitle}>Haz tu vida simple</h1>
            <p className={styles.infoSubtitle}>
              Guarda todas tus notas en una aplicación simple e intuitiva que te
              ayuda a disfrutar de lo que realmente es importante en la vida.
            </p>
          </div>
        </div>
        <LoginForm />
      </main>
    </div>
  );
}
