import styles from "./IconesHeader.module.css";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const icones = [perfil, sacola];

export default function IconesHeader() {
  return (
    <ul className={styles.icones}>
      {icones.map((icone) => (
        <li className={styles.icone}>
          <img src={icone} />
        </li>
      ))}
    </ul>
  );
}
