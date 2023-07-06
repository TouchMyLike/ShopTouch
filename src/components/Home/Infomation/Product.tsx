import React from 'react'
import Link from 'next/link'
import { BiCart } from 'react-icons/bi'
import { productProp } from '@/types'

export default function Product(props: productProp) {
  console.log(props.src)
  return (
    <div className='flex w-40 flex-col pt-2 pr-3 pb-3 sm:w-44'>
      <Link href='#'>
        <img className='h-44' src={props.src} alt='product' />
        <div className='mt-2 md:h-20'>
          <p className='text-md truncate font-bold text-gray-700 sm:whitespace-normal'>{props.name}</p>
        </div>
        <div className='mt-6'>
          <p className='text-md font-bold text-red-500'>฿{props.price}</p>
        </div>
      </Link>
      <div className='ml-auto flex flex-col justify-end'>
        <button className='rounded-full bg-primary p-2'>
          <BiCart className='h-6 w-6 text-white' />
        </button>
      </div>
    </div>
  )
}
