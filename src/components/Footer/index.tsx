import React from 'react'
import Links from './Links'
import Socials from './Socials'
import NewsLetter from './NewsLetter'
import Copyright from './Copyright'
import styles from './styles.module.scss'

export default function index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Copyright />
      </div>
    </footer>
  )
}
