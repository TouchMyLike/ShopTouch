import React from 'react'
import { BiCart } from 'react-icons/bi'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 10,
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 15,
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 20,
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1583238620298-25dd9fa7f5cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    color: 25,
    discount: 20,
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 30,
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 35,
  },
]

export default function index() {
  return (
    <div className='mt-6 rounded-lg bg-white drop-shadow-lg'>
      <div className='px-4 py-6'>
        <div className='flex items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-bold'>ประเภทสินค้า</h2>
          </div>
          <div className='flex-0'>
            <Link href='#'>
              <h2 className='text-xl font-bold text-primary'>ดูสินค้าทั้งหมด</h2>
            </Link>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8'>
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
                  <h3 className='text-lg font-bold text-gray-700'>
                    <a href={product.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                    </a>
                  </h3>
                  <p className='text-md mt-1 font-bold text-red-500'>
                    ฿{(product.price - product.price / product.discount).toFixed(2)}
                  </p>
                  <p className='mt-1 text-sm text-gray-500 line-through'>฿{product.price}</p>
                </div>
                <div className='flex flex-col justify-end'>
                  <div className='rounded-full bg-primary p-2'>
                    <BiCart className='h-6 w-6 text-white' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
