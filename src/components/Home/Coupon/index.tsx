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

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8'>
          {products.map((product) => (
            <div key={product.id} className='group relative'>
              <div className='aspect-w-1 aspect-h-1 lg:aspect-none h-80 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <p className='text-lg font-bold text-gray-700'>
                    <a href={product.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                    </a>
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
