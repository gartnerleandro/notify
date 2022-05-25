import SearchIcon from "../Icons/search.svg";

import styles from "../../styles/Search.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <SearchIcon />
      <input className={styles.input} placeholder="Buscar Notas" />
    </div>
  );
}
