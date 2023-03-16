import Link from 'next/link'
import styles from './styles.module.scss'

export default function FlashCard(props: any) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Link href={props.product.link}>
          <img src={props.product.image} alt='' />
        </Link>
        <div className={styles.flash}>
          <span>-{props.product.discount}%</span>
        </div>
      </div>
      <div className={styles.card__price}>
        <span>USD{(props.product.price - props.product.price / props.product.discount).toFixed(2)}$</span>
        <span>
          -USD
          {(props.product.price - (props.product.price - props.product.price / props.product.discount)).toFixed(2)}$
        </span>
      </div>
    </div>
  )
}
