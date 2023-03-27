import React from 'react'
import Link from 'next/link'
import { categoriesData } from '@/hooks/useApi'
import { ProductList } from '@/data/ProductList'
import Product from './Product'

export default function index() {
  return (
    <div>
      {ProductList.map((p, i) => (
        <div className='mt-6 rounded-lg bg-white drop-shadow-lg' key={i}>
          <div className='px-4 py-6'>
            <div className='flex items-center'>
              <div className='flex-1'>
                <h2 className='text-sm font-bold'>{p.name}</h2>
              </div>
              <div className='flex-0'>
                <Link href='#'>
                  <h2 className='text-sm font-bold text-primary'>ดูเพิ่มเติม&#62;&#62;</h2>
                </Link>
              </div>
            </div>
            <hr className='m-5' />
            <div className='overflow-scroll'>
              <div className='mx-auto mt-10 mb-5 flex w-fit justify-center justify-items-center gap-y-20 gap-x-3'>
                {p.items.map((item, i) => (
                  <div key={i}>
                    <Product name={item.name} price={item.price} src={item.src} />
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
