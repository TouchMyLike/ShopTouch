import React from 'react'
import { categoriesData } from '@/hooks/useApi'
import styles from './styles.module.scss'

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className='flex w-60 flex-col rounded-lg bg-white drop-shadow-lg'>
        <p className='text-md rounded-tl-lg rounded-tr-lg bg-secondary py-0.5 px-5 font-bold text-white'>สินค้า</p>
        <ul className='py-5'>
          {categoriesData?.categories.map((categorie, i) => (
            <li className='cursor-pointer hover:bg-primary' key={i}>
              <p className='py-0.5 px-5 text-xs'>{categorie.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
