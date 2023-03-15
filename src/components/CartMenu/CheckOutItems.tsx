import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { HiX } from 'react-icons/hi'

import { increase, decrease, remove, cartItemType } from '@/store/features/cartSlice'
import { numberFormat } from '@/utils/UtilsData'

interface ICheckOutItems {
  cartItem: cartItemType
}
export default function CheckOutItems({ cartItem }: ICheckOutItems) {
  const dispatch = useDispatch()
  const { id, price, amount, name, image } = cartItem
  return (
    <div className='mb-6 flex min-w-[20rem] items-center justify-between border border-solid p-4 drop-shadow-md'>
      <div className='flex gap-2 sm:gap-10'>
        <div className='flex shrink-0'>
          <Image src={image} alt='Product' className='h-20 w-20 object-cover' />
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
      <div className='flex flex-col items-center gap-3'>
        <HiX className='cursor-pointer text-xl' onClick={() => dispatch(remove(cartItem))} />
        <div>{numberFormat(price * amount)} บาท</div>
      </div>
    </div>
  )
}
