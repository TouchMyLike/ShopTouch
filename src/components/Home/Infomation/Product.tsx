import React from 'react'
import Link from 'next/link'

export default function Product() {
  return (
    <div className='w-40 rounded-xl bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl'>
      <Link href='#'>
        <img
          src='https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt='Product'
          className='h-40 w-40 rounded-t-xl object-cover'
        />
        <div className='w-40 px-4 py-3'>
          <p className='block truncate text-lg font-bold capitalize text-black'>Product Name</p>
          <div className='flex items-center'>
            <p className='my-3 cursor-auto text-xs font-semibold text-gray-500'>$149</p>
            <div className='ml-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-bag-plus'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
                />
                <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
