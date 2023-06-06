import styles from "./Logo.module.css";
import logo from "../../imagens/logo.svg"
import React from "react";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo alura books" className={styles.logoImg}/>
      <p>
        <strong>Alura</strong> Books
      </p>
    </div>
  );
}
