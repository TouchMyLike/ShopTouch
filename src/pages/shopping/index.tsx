import { useDispatch } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { items } from '@/assets/datas/CartItems'
import { add, cartItemType } from '@/store/features/cartSlice'
import { numberFormat } from '@/utils/UtilsData'

import styles from '@/styles/Home.module.scss'

export default function Shopping() {
  return (
    <>
      <Navbar />
      <section className={styles.home}>
        <div className='section grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
export function ShoppingItems({ item }: IShoppingItems) {
  const dispatch = useDispatch()
  const { id, image, price, name } = item
  return (
    <div>
      <Link href={`/shopping/${id}`}>
        <div className='flex h-[300px] items-center justify-center bg-cyan-500'>
          <Image src={image} alt='Product' className='w-[200px]' />
        </div>
      </Link>
      <div className='mt-6 flex items-center justify-between px-4'>
        <div>
          <div className='mb-3 text-sm font-bold'>{name}</div>
          <div className='text-xl font-bold'>{numberFormat(price)} บาท</div>
        </div>
        <button className='rounded-lg bg-cyan-500 p-3' onClick={() => dispatch(add(item))}>
          หยิบใส่ตะกร้า
        </button>
      </div>
    </div>
  )
}
