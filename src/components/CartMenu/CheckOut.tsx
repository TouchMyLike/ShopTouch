import { useDispatch, useSelector } from 'react-redux'
import { HiTrash, HiX } from 'react-icons/hi'
import { RootState } from '@/store'
import { open } from '@/store/features/checkOutSlice'
import { clear } from '@/store/features/cartSlice'

import CheckOutItems from './CheckOutItems'
import { numberFormat } from '@/utils/UtilsData'

export default function CheckOut() {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((state: RootState) => state.cart)

  return (
    <div className='fixed top-0 right-0 z-30 h-screen bg-white drop-shadow-md'>
      <div className='bg-grey h-full w-screen overflow-y-auto sm:w-[30rem]'>
        <div className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <span className='select-none'>ตะกร้าของฉัน ({amount})</span>
            </div>
            <div className='flex w-28 justify-between'>
              <HiTrash className='cursor-pointer text-2xl' onClick={() => dispatch(clear())} />
              <HiX className='cursor-pointer text-2xl' onClick={() => dispatch(open())} />
            </div>
          </div>
          <div className='mt-8'>
            {cartItems.length === 0 ? (
              <div className='text-center text-3xl uppercase'>Your cart is empty</div>
            ) : (
              <>
                {cartItems.map((cartItem) => {
                  return <CheckOutItems key={cartItem.id} cartItem={cartItem} />
                })}
                <div className='mt-12 flex items-center justify-between'>
                  <div>Total Cost: {numberFormat(total)} บาท</div>
                </div>
                <div className='mt-8 cursor-pointer bg-black p-3 text-center text-white'>สั่งซื้อสินค้า</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
