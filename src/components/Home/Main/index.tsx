import styles from './styles.module.scss'
import Menu from './Menu'
import Swiper from './Swiper'

export default function index() {
  return (
    <div className={styles.main}>
      <Menu />
      <Swiper />
    </div>
  )
}
