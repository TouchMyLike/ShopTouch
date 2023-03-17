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
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <Coupon />
          <Category />
          <Infomation />
        </div>
      </div>
      <Footer />
    </div>
  )
}
