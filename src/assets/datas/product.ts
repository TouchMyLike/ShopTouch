import { cartItemType } from '@/store/features/cartSlice'

export const items: cartItemType[] = [
  {
    id: 1,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 0,
    amount: 1,
  },
  {
    id: 2,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 1234,
    discount: 15,
    amount: 1,
  },
  {
    id: 3,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    // discount: 20,
    amount: 1,
  },
  {
    id: 4,
    name: 'Basic Tee',
    imageSrc:
      'https://images.unsplash.com/photo-1583238620298-25dd9fa7f5cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    amount: 1,
    discount: 20,
  },
  {
    id: 5,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 30,
    amount: 1,
  },
  {
    id: 6,
    name: 'Basic Tee',
    imageSrc:
      'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    discount: 35,
    amount: 1,
  },
]
