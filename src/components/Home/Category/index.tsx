import React from 'react'
import Link from 'next/link'
import { categoriesData } from '@/hooks/useApi'

export default function index() {
  return (
    <div className='mt-6 rounded-lg bg-white drop-shadow-lg'>
      <div className='px-4 py-6'>
        <div className='flex items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-bold'>หมวดหมู่</h2>
          </div>
          <div className='flex-0'>
            <Link href='#'>
              <h2 className='text-xl font-bold text-primary'>ดูสินค้าทั้งหมด</h2>
            </Link>
          </div>
        </div>

        <div className='mt-4 mb-4 flex overflow-auto'>
          {categoriesData?.categories.map((categorie, i) => (
            <div className='cursor-pointer hover:bg-primary' key={i}>
              <p className='py-0.5 px-5 text-xs'>{categorie.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
