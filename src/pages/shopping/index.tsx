import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { BiCart } from 'react-icons/bi'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { items } from '@/assets/datas/product'
import defaultImage from '@/assets/images/default_image.png'
import { add, cartItemType } from '@/store/features/cartSlice'
import { numberFormat } from '@/utils/UtilsData'

export default function Shopping() {
  return (
    <>
      <Navbar />
      <section className='min-h-screen bg-[#fafafa]'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8'>
          {items.map((item) => {
            return <ShoppingItems key={item.id} item={item} />
          })}
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
