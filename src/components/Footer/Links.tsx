import Link from 'next/link'
import styles from './styles.module.scss'

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul key={i}>
          {<b>{link.heading}</b>}
          {link.links.map((link, i) => (
            <li key={i}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

const links = [
  {
    heading: 'บริการลูกค้า',
    links: [
      {
        name: 'ศูนย์ช่วยเหลือ',
        link: '',
      },
      {
        name: 'วิธีการสั่งซื้อเเละชำระเงิน',
        link: '',
      },
      {
        name: 'วิธีการจัดส่ง',
        link: '',
      },
      {
        name: 'สถานะการสั่งซื้อ',
        link: '',
      },
    ],
  },
  {
    heading: 'เกี่ยวกับเรา',
    links: [
      {
        name: 'ข้อตกลงเเละเงื่อนไข',
        link: '',
      },
      {
        name: 'Privacy Notice',
        link: '',
      },
      {
        name: 'นโยบายการใช้คุกกี้',
        link: '',
      },
      {
        name: 'ติดต่อเรา',
        link: '',
      },
    ],
  },
  {
    heading: 'ดาวน์โหลดแอป Shoptouch',
    links: [
      {
        name: '',
        link: '',
      },
      {
        name: '',
        link: '',
      },
      {
        name: '',
        link: '',
      },
      {
        name: '',
        link: '',
      },
    ],
  },
]
