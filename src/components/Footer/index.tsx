import React from "react";
import Links from "./Links";
import Socials from "./Socials";
import styles from "./styles.module.scss";

export default function index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        {/* <NewsLetter />
        <Payment />
        <Copyright country={country} />  */}
      </div>
    </footer>
  );
}
