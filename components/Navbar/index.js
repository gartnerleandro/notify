import Home from "../../components/Icons/home.svg";
import Notify from "../../components/Icons/logo-small.svg";
import Add from "../../components/Icons/add.svg";
import Exit from "../../components/Icons/exit.svg";

import { onLogout } from "../../firebase/client";

import styles from "../../styles/Navbar.module.css";

export default function Navbar({ onAdd }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav className={styles.navbar}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Notify />
        </a>
      </div>
      <div className={styles.actions}>
        <i className={styles.home}>
          <Home />
        </i>
        <button className={styles.add} onClick={onAdd}>
          <Add />
        </button>
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        <Exit />
      </button>
    </nav>
  );
}
