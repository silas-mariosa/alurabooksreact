import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.AppHeader}>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}
