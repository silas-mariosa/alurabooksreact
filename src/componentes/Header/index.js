import { Link } from "react-router-dom";
import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.AppHeader}>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}
