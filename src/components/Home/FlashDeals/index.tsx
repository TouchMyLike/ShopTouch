import Link from 'next/link'
import React from 'react'
import FlashCard from './FlashCard'
import styles from './styles.module.scss'

export default function index() {
  const products = [
    {
      id: 1,
      link: '',
      image:
        'https://images.unsplash.com/photo-1583238620298-25dd9fa7f5cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      discount: 70,
      price: 321,
      sold: 80,
    },
    {
      id: 2,
      link: '',
      image:
        'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      discount: 50,
      price: 39,
      sold: 80,
    },
    {
      id: 3,
      link: '',
      image:
        'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      discount: 50,
      price: 39,
      sold: 80,
    },
    {
      id: 4,
      link: '',
      image:
        'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      discount: 50,
      price: 39,
      sold: 80,
    },
    {
      id: 5,
      link: '',
      image:
        'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      discount: 50,
      price: 39,
      sold: 80,
    },
    {
      id: 6,
      link: '',
      image:
        'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      discount: 50,
      price: 39,
      sold: 80,
    },
  ]

  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>สินค้าโปรโมชั่น</h1>
      </div>
      <div className={styles.flashDeals__list}>
        {products.map((product) => (
          <div key={product.id}>
            <FlashCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
