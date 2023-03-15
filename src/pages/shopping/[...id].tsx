import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { add, cartItemType } from '@/store/features/cartSlice'
import { items } from '@/assets/datas/CartItems'
import { isObject, numberFormat } from '@/utils/UtilsData'

import styles from '@/styles/Home.module.scss'

export default function ShoppingItemId() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query

  // if (id) debugger
  // else return <>404 page</>
  // const id = typeof props.id == 'object' ? props.id[0] : ''
  // const item: cartItemType | undefined = items.find((item) => item.id === parseInt(id))
  // const { name = '', price = '', image = '' } = item ? item : {}

  const _id = isObject(id) ? id[0] : ''
  const item = items.find((item) => item.id === parseInt(_id))! //<-- add ! WTF!!!
  const { name, price, image } = item

  return (
    <>
      <Navbar />
      <section className={styles.home}>
        <div className='flex min-h-screen w-full items-center justify-center p-4'>
          <div className='items-center justify-center lg:flex '>
            <Image src={image} alt='Product' className='m-2 w-[25rem] md:w-[30rem] lg:w-[35rem]' />
            <div>
              <div className='mb-4 text-3xl font-extrabold'>{name}</div>
              <div className='mb-4'>{numberFormat(price)} บาท</div>
              <p className='mb-4 max-w-[400px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique recusandae reiciendis, ad iure
                accusantium magni, quisquam nisi asperiores incidunt quibusdam dolores deleniti. Fugiat, nisi magnam.
              </p>
              <button className='bg-black p-3 text-white' onClick={() => dispatch(add(item))}>
                หยิบใส่ตะกร้า
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
