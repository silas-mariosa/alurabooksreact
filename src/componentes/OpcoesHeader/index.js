import styles from "./OpcoesHeader.module.css";
import { Link } from "react-router-dom"

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

export default function OpcoesHeader() {
  return (
    <ul className={styles.opcoes}>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
        <li className={styles.opcao}>
          <p className={styles.opcaoTexto}>{texto}</p>
        </li>
        </Link>
      ))}
    </ul>
  );
}
