import React from 'react'
import Link from 'next/link'
import { categoriesData } from '@/hooks/useApi'
import Product from './Product'

export default function index() {
  return (
    <div>
      {categoriesData?.categories.map((categorie, i) => (
        <div key={i} className='mt-6 rounded-lg bg-white drop-shadow-lg'>
          <div className='px-4 py-6'>
            <div className='flex items-center'>
              <div className='flex-1'>
                <h2 className='text-2xl font-bold'>{categorie.name}</h2>
              </div>
              <div className='flex-0'>
                <Link href='#'>
                  <h2 className='text-xl font-bold text-primary'>ดูเพิ่มเติม</h2>
                </Link>
              </div>
            </div>
            <hr className='m-5' />
            <div className='overflow-scroll'>
              <div className='mx-auto mt-10 mb-5 flex w-fit justify-center justify-items-center gap-y-20 gap-x-3'>
                {categorie.items.map((item, i) => (
                  <div key={i}>
                    <Product />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
