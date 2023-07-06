import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { BiCart, BiChevronLeft, BiChevronRight, BiCaretRight } from 'react-icons/bi'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { items } from '@/assets/datas/product'
import defaultImage from '@/assets/images/default_image.png'
import { add } from '@/store/features/cartSlice'
import { cartItemType } from '@/types'
import { numberFormat } from '@/utils/UtilsData'
import { categoriesData } from '@/hooks/useApi'
import Pagination from '@/components/my/Pagination'

export default function Shopping() {
  const items_page = 10

  // let {startIndex, endIndex, data} = props

  let _items = items.slice(0, items_page)

  return (
    <>
      <Navbar />
      <section className='section flex min-h-screen flex-col gap-3 bg-[#fafafa]'>
        <div className='px-3 text-sm text-gray-700'>
          <Link href='#'>หน้าหลัก</Link>
          <BiCaretRight className='inline' />
          <Link href='#'>ตัวกรอง1</Link>
          <BiCaretRight className='inline' />
          <Link href='#'>ตัวกรอง2</Link>
        </div>
        <div className='flex gap-0 md:gap-3'>
          <div /* Menu Filters */>
            <div className='hidden md:block '>
              <div className='flex w-48 shrink-0 flex-col rounded-lg bg-white drop-shadow-lg'>
                <p className='text-md rounded-tl-lg rounded-tr-lg bg-secondary py-0.5 px-5 font-bold text-white'>
                  ตัวกรอง
                </p>
                <div className='flex flex-col'>
                  <div className='flex flex-col'>
                    <div className='px-5 pt-3 font-bold'>สินค้า</div>
                    <div className='sideMenu my-3 h-36'>
                      <ul>
                        {categoriesData?.categories.map((categorie, i) => (
                          <li className='cursor-pointer hover:bg-primary' key={i}>
                            <p className='py-0.5 px-5 text-xs'>{categorie.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr />
                  </div>
                  <div className='flex flex-col'>
                    <div className='px-5 pt-3 font-bold'>สินค้า</div>
                    <div className='sideMenu my-3 h-36'>
                      <ul>
                        {categoriesData?.categories.map((categorie, i) => (
                          <li className='cursor-pointer hover:bg-primary' key={i}>
                            <p className='py-0.5 px-5 text-xs'>{categorie.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr />
                  </div>
                  <div className='flex flex-col'>
                    <div className='px-5 pt-3 font-bold'>สินค้า</div>
                    <div className='sideMenu my-3 h-36'>
                      <ul>
                        {categoriesData?.categories.map((categorie, i) => (
                          <li className='cursor-pointer hover:bg-primary' key={i}>
                            <p className='py-0.5 px-5 text-xs'>{categorie.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-col gap-3'>
              <div className='rounded-lg bg-white drop-shadow-lg'>
                <div className='px-4 py-6'>
                  <div className='flex items-center'>
                    <div className='flex-1'>
                      <h2 className='text-lg font-bold text-gray-700'>ประเภทสินค้า</h2>
                    </div>
                    <div className='flex-0'>
                      {/* Dropdown */}
                      <h2 className='text-lg text-gray-700'>เรียงตาม</h2>
                    </div>
                  </div>
                  <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8'>
                    {_items.map((item) => {
                      return <ShoppingItems key={item.id} item={item} />
                    })}
                  </div>
                </div>
                <Pagination />
              </div>
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
        <div className='aspect-w-1 aspect-h-1 h-80 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
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
