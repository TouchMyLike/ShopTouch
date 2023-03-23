import React from 'react'
import styles from './styles.module.scss'
import Top from './Top'
import Main from './Main'

export default function index() {
  return (
    <header className={styles.header}>
      <div className='hidden lg:block'>
        <Top />
      </div>
      <div>
        <Main />
      </div>
    </header>
  )
}
