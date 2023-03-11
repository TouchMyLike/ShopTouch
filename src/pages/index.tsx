import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import Main from '@/components/Home/Main'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
        </div>
      </div>
      <div className="bg-sky-300">Tailwindcss Support</div>
      <Footer />
    </div>
  )
}
