import styles from './styles.module.scss'
import Menu from './Menu'

export default function index() {
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.swiper}>swiper</div>
    </div>
  )
}
