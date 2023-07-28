import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

interface propsType {
  loggedIn: boolean
  signOut: Function
}

export default function UserMenu(props: propsType) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to ShopTouch!</h4>
      {props.loggedIn ? (
        <div className={styles.flex}>
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3361/3361836.png"
            alt=""
            className={styles.menu__img}
          /> */}
          <div className={styles.col}>
            <span>Welcome Back, </span>
            <h3>TSM</h3>
            <span>(TML Store Manager)</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>สมัครสมาชิก</button>
          <button onClick={() => console.log(props.signOut(true))} className={styles.btn_primary}>
            เข้าสู่ระบบ
          </button>
        </div>
      )}
      {props.loggedIn && (
        <ul>
          <li>
            <Link href='/profile'>บัญชีของฉัน</Link>
          </li>
          <li>
            <Link href='/profile/orders'>ประวัติคำสั่งซื้อ</Link>
          </li>
          <li>
            <Link href='/profile/member'>บัตรสมาชิก</Link>
          </li>
          <li>
            {/* <Link href="/signout">ออกจากระบบ</Link> */}
            <p onClick={() => console.log(props.signOut(false))}>ออกจากระบบ</p>
          </li>
        </ul>
      )}
    </div>
  )
}
