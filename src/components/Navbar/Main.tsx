import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { RiSearch2Line } from 'react-icons/ri'
import { BiCart } from 'react-icons/bi'
import { RootState } from '@/store'
import { open } from '@/store/features/checkOutSlice'
import { total } from '@/store/features/cartSlice'
import CheckOut from '../CartMenu/CheckOut'
import styles from './styles.module.scss'
import { Badge } from '../my'

export default function Main() {
  const dispatch = useDispatch()
  const { amount, cartItems } = useSelector((state: RootState) => state.cart)
  const { isOpen } = useSelector((state: RootState) => state.checkOut)

  useEffect(() => {
    dispatch(total())
  }, [cartItems, dispatch])

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href='/' className={styles.logo}>
          <Image src='/Logo.png' alt='Logo' width={500} height={500} />
        </Link>
        <div className={styles.search}>
          <input type='text' placeholder='ค้นหาสินค้า...' />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Badge value={amount} bgColor='bg-red-500' icon={<BiCart onClick={() => dispatch(open())} />} />
        {isOpen && <CheckOut />}
      </div>
    </div>
  )
}
