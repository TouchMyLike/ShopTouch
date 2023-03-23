import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { BiCart, BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { items } from '@/assets/datas/product'
import defaultImage from '@/assets/images/default_image.png'
import { add, cartItemType } from '@/store/features/cartSlice'
import { numberFormat } from '@/utils/UtilsData'
import { categoriesData } from '@/hooks/useApi'

export default function Shopping() {
  const items_page = 10
  const pagination_page = items.length / items_page
  const pagesArray = []
  for (var i = 0; i < pagination_page; i++) {
    pagesArray.push(
      <li key={i}>
        <Link
          href='#'
          className='border border-gray-300 bg-white px-3 py-2 text-[15px] leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          {i + 1}
        </Link>
      </li>
    )
  }
  // let {startIndex, endIndex, data} = props

  let _items = items.slice(0, items_page)
  return (
    <>
      <Navbar />
      <section className='section flex min-h-screen flex-col gap-3 bg-[#fafafa]'>
        <div className='flex gap-3'>
          <div className='flex w-60 shrink-0 flex-col rounded-lg bg-white drop-shadow-lg'>
            <p className='text-md rounded-tl-lg rounded-tr-lg bg-secondary py-0.5 px-5 font-bold text-white'>สินค้า</p>
            <ul className='py-5'>
              {categoriesData?.categories.map((categorie, i) => (
                <li className='cursor-pointer hover:bg-primary' key={i}>
                  <p className='py-0.5 px-5 text-xs'>{categorie.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='rounded-lg bg-white drop-shadow-lg'>
              <div className='px-4 py-6'>
                <div className='flex items-center'>
                  <div className='flex-1'>
                    <h2 className='text-lg text-gray-700'>{' หน้าหลัก > ตัวกรอง1 > ตัวกรอง2'}</h2>
                  </div>
                  <div className='flex-0'>
                    {/* <Link href='#'> */}
                    <h2 className='text-lg text-gray-700'>เรียงตาม</h2>
                    {/* </Link> */}
                  </div>
                </div>
                <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8'>
                  {_items.map((item) => {
                    return <ShoppingItems key={item.id} item={item} />
                  })}
                </div>
              </div>
            </div>
            <div className='mt-3 self-end'>
              {/* Pagination */}
              <ul className='inline-flex items-center -space-x-px'>
                <li>
                  <Link
                    href='#'
                    className='ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Previous</span>
                    <BiChevronLeft size={19} />
                  </Link>
                </li>
                {pagesArray}
                <li>
                  <Link
                    href='#'
                    className='block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Next</span>
                    <BiChevronRight size={19} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

interface IShoppingItems {
  item: cartItemType
}
export function ShoppingItems(props: IShoppingItems) {
  const dispatch = useDispatch()
  const { item } = props
  const { id, name, image, imageSrc, imageAlt, price, discount } = item
  const phref = `/shopping/${id}`
  const pImage = image || imageSrc || defaultImage
  const pImageAlt = imageAlt || 'Product'

  return (
    <div className='group relative'>
      <Link href={phref}>
        <div className='aspect-w-1 aspect-h-1 lg:aspect-none h-80 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80'>
          <Image
            src={pImage}
            alt={pImageAlt}
            width={200}
            height={200}
            className='h-full w-full object-cover object-center'
          />
        </div>
      </Link>
      <div className='mt-4 flex h-[5rem] justify-between'>
        <div>
          <Link href={phref}>
            <h3 className='text-lg font-bold text-gray-700'>{name}</h3>
          </Link>
          {discount ? (
            <>
              <p className='text-md mt-1 font-bold text-red-500'>฿{numberFormat(price - (price * discount) / 100)}</p>
              <p className='mt-1 text-sm text-gray-500 line-through'>฿{numberFormat(price)}</p>
            </>
          ) : (
            <>
              <p className='text-md mt-1 font-bold text-red-500'>฿{numberFormat(price)}</p>
            </>
          )}
        </div>
        <div className='flex flex-col justify-end'>
          <button className='rounded-full bg-primary p-2' onClick={() => dispatch(add(item))}>
            <BiCart className='h-6 w-6 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
