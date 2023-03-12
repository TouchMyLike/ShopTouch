import React from 'react'
import { categoriesData } from '@/hooks/useApi'
import styles from './styles.module.scss'

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className='w-60 flex flex-col bg-white drop-shadow-lg rounded-lg'>
      <p className='bg-secondary text-white text-md font-bold py-0.5 px-5 rounded-tl-lg rounded-tr-lg'>สินค้า</p>
        <ul className='py-5'>
        {
        categoriesData?.categories.map((categorie, i) => (
            <li className='hover:bg-primary cursor-pointer' key={i}>
              <p className='text-xs py-0.5 px-5'>{categorie.name}</p>
            </li>
        ))
        }
        </ul>
    </div>
    </div>
  )
}
