import Navbar from "../../components/Navbar";

import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <p>content</p>
      </main>
    </div>
  );
}
