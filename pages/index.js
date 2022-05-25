import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { onAuthChanged } from "../firebase/client";

import LoginForm from "../components/LoginForm";

import styles from "../styles/Login.module.css";

export default function Login() {
  const [user, setUser] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    onAuthChanged(setUser);
  }, []);

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
  }, [user]);

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
        {typeof user === "undefined" ? (
          <div />
        ) : (
          <>
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
                  Guarda todas tus notas en una aplicación simple e intuitiva
                  que te ayuda a disfrutar de lo que realmente es importante en
                  la vida.
                </p>
              </div>
            </div>
            <LoginForm />
          </>
        )}
      </main>
    </div>
  );
}
