import React from 'react'
import Links from './Links'
import Socials from './Socials'
import NewsLetter from './NewsLetter'
import Copyright from './Copyright'
import styles from './styles.module.scss'

export default function index() {
  return (
    <div className='mt-6 border-t-2 border-neutral-200 bg-white text-center text-neutral-600 lg:text-left'>
      <div className='flex items-center justify-center border-b-2 border-neutral-200 p-6'>
        <div className='flex justify-center'>
          <Links />
        </div>
      </div>
      <div className='bg-secondary p-6 text-center text-white'>
        <span>©2023 ShopTouch All Rights Resereved.</span>
      </div>
    </div>
  )
}
