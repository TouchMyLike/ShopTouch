import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import UserMenu from './UserMenu'

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <span>ภาษาไทย</span>
          </li>
          <li className={styles.li}>
            <span>ช่วยเหลือ</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href='/profile/whishlist'>
              <span>สินค้าที่อยากได้</span>
            </Link>
          </li>
          <ul className={styles.li} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {loggedIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  {/* <img src={`https://cdn-icons-png.flaticon.com/512/3361/3361836.png`} alt='' /> */}
                  <span>TSM</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>บัญชีของฉัน</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu loggedIn={loggedIn} signOut={setLoggedIn} />}
          </ul>
        </ul>
      </div>
    </div>
  )
}
