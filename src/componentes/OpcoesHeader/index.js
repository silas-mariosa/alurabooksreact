import styles from "./OpcoesHeader.module.css";

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

export default function OpcoesHeader() {
  return (
    <ul className={styles.opcoes}>
      {textoOpcoes.map((opcao) => (
        <li className={styles.opcao}>
          <p>{opcao}</p>
        </li>
      ))}
    </ul>
  );
}
