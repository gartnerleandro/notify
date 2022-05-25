import { useState } from "react";
import Image from "next/image";

import Google from "../Icons/google.svg";
import Join from "../Icons/join.svg";
import { loginWithGoogle, loginAnonymously } from "../../firebase/client";

import styles from "../../styles/LoginForm.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAnonimousLogin = () => {
    loginAnonymously(username);
  };

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
        <button className={styles.googleButton} onClick={loginWithGoogle}>
          <Google />
          Entra con Google
        </button>
        <div className={styles.separator}>o entra de forma anónima</div>
        <input
          className={styles.anonymousInput}
          placeholder="Escribe tu nombre secreto"
          onChange={handleUsernameChange}
        />
        <button
          className={styles.anonymousButton}
          onClick={handleAnonimousLogin}
        >
          <Join />
          Entrar anónimamente
        </button>
      </div>
    </div>
  );
}
