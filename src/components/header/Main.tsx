import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { BiCart } from "react-icons/bi";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className={styles.logo}>
          <img src="../../../Logo.png" alt="" />
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="ค้นหาสินค้า..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart" className={styles.cart}>
          <BiCart />
          <span>0</span>
        </Link>
      </div>
    </div>
  );
}
