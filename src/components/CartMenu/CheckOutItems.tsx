import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { HiX } from 'react-icons/hi'

import defaultImage from '@/assets/images/default_image.png'
import { increase, decrease, remove, cartItemType } from '@/store/features/cartSlice'
import { numberFormat } from '@/utils/UtilsData'

interface ICheckOutItems {
  cartItem: cartItemType
}
export default function CheckOutItems({ cartItem }: ICheckOutItems) {
  const dispatch = useDispatch()
  const { name, image, imageSrc, imageAlt, price, amount, discount } = cartItem
  const pImage = image || imageSrc || defaultImage
  const pImageAlt = imageAlt || 'Product'
  return (
    <div className='mb-6 flex h-28 min-w-[20rem] items-center justify-between border border-solid p-4 drop-shadow-md'>
      <div className='flex gap-2 sm:gap-10'>
        <div className='flex shrink-0'>
          <Image src={pImage} alt={pImageAlt} width={50} height={50} className='h-20 w-20 object-cover object-center' />
        </div>
        <div className='flex max-w-[12rem] flex-col items-start'>
          <div>{name}</div>
          <div className='mt-2 flex items-center gap-4'>
            <button className='h-8 w-8 rounded-full bg-black text-white ' onClick={() => dispatch(decrease(cartItem))}>
              -
            </button>
            <div>{amount}</div>
            <button className='h-8 w-8 rounded-full bg-black text-white ' onClick={() => dispatch(increase(cartItem))}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex h-full flex-col items-end justify-around'>
        <div>
          <HiX className='cursor-pointer text-xl' onClick={() => dispatch(remove(cartItem))} />
        </div>
        <div>
          {discount ? (
            <>
              <p className='text-md font-bold text-red-500'>
                ฿{numberFormat((price - (price * discount) / 100) * amount)}
              </p>
              <p className='text-sm text-gray-500 line-through'>฿{numberFormat(price * amount)}</p>
            </>
          ) : (
            <>
              <p className='text-md font-bold text-red-500'>฿{numberFormat(price * amount)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
