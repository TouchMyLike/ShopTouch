import React from 'react'
import { BiCart } from 'react-icons/bi'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'สินค้าความงาม ลด 70.- เมื่อช้อปครบ 499.-',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'Get discount 70.- when purchase beauty products 499.-',
    description: 'Get discount 70.- when purchase beauty products 499.-',
  },
  {
    id: 2,
    name: 'สินค้าความงาม ลด 70.- เมื่อช้อปครบ 499.-',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'Get discount 70.- when purchase beauty products 499.-',
    description: 'Get discount 70.- when purchase beauty products 499.-',
  },
  {
    id: 3,
    name: 'สินค้าความงาม ลด 70.- เมื่อช้อปครบ 499.-',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'Get discount 70.- when purchase beauty products 499.-',
    description: 'Get discount 70.- when purchase beauty products 499.-',
  },
  {
    id: 4,
    name: 'สินค้าความงาม ลด 70.- เมื่อช้อปครบ 499.-',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'Get discount 70.- when purchase beauty products 499.-',
    description: 'Get discount 70.- when purchase beauty products 499.-',
  },
  {
    id: 5,
    name: 'สินค้าความงาม ลด 70.- เมื่อช้อปครบ 499.-',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'Get discount 70.- when purchase beauty products 499.-',
    description: 'Get discount 70.- when purchase beauty products 499.-',
  },
]

export default function index() {
  return (
    <div className='mt-6 rounded-lg bg-white drop-shadow-lg'>
      <div className='px-4 py-6'>
        <div className='flex items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-bold'>คูปองส่วนลด</h2>
          </div>
          <div className='flex-0'>
            <Link href='#'>
              <h2 className='text-xl font-bold text-primary'>ดูทั้งหมด</h2>
            </Link>
          </div>
        </div>

        <div className='overflow-scroll'>
          <div className='mt-10 mb-5 flex w-fit justify-center justify-items-center gap-y-20 gap-x-3'>
            {products.map((product) => (
              <div key={product.id}>
                <div className='w-40 rounded-xl bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl'>
                  <a href='#'>
                    <img src={product.imageSrc} alt='Product' className='h-40 w-40 rounded-t-xl object-cover' />
                    <div className='w-40 px-4 py-3'>
                      <p className='block truncate text-lg font-bold capitalize text-black'>{product.name}</p>
                      <div className='flex w-full items-center'>
                        <p className='cursor-auto text-xs text-gray-600'>{product.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
