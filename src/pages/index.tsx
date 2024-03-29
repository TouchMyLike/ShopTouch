import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import Main from '@/components/Home/Main'
import FlashDeals from '@/components/Home/FlashDeals/'
import Footer from '@/components/Footer'
import Coupon from '@/components/Home/Coupon'
import Category from '@/components/Home/Category'
import Infomation from '@/components/Home/Infomation'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div className='md:hidden'>
          <Category />
        </div>
        <div className='pt-3 lg:p-5'>
          <Main />
          {/* <FlashDeals />
          <Coupon /> */}
          <Infomation />
        </div>
      </div>
      <div className='hidden md:block'>
        <Footer />
      </div>
    </div>
  )
}
