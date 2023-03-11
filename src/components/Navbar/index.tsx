import React from "react";
import styles from "./styles.module.scss";
import Top from "./Top";
import Main from "./Main";

export default function index() {
  return (
    <header className={styles.header}>
      <Top />
      <Main />
    </header>
  );
}
