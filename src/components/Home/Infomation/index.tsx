import React from 'react'
import Link from 'next/link'
import { ProductList } from '@/data/ProductList'
import Product from './Product'

export default function index() {
  return (
    <div>
      {ProductList.map((p, i) => (
        <div className='mb-4 mt-4 pl-2 pr-2' key={i}>
          <div className='rounded-3xl bg-white pt-4 pr-6 pl-6 drop-shadow-lg'>
            <div className='flex items-center'>
              <div className='flex-1'>
                <span className='text-xl font-bold'>{p.name}</span>
              </div>
              <div className='flex-0'>
                <Link href='#'>
                  <span className='text-lg font-extrabold text-link'>ดูสินค้าเพิ่มเติม</span>
                </Link>
              </div>
            </div>
            <div className='flex gap-0 overflow-x-scroll md:gap-5'>
              {p.items.map((item, i) => (
                <div key={i}>
                  <Product name={item.name} price={item.price} src={item.src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
