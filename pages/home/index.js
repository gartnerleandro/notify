import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Welcome from "../../components/Welcome";

import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { getLocalValue } from "../../utils/localStorage";

export default function Home() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const name = getLocalValue("user").username;

    setUsername(name);
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Header />
        <Welcome username={username} />
      </main>
    </div>
  );
}
