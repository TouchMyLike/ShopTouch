import { StaticImageData } from 'next/image'

type cartItemType = {
  id: number
  name: string
  image?: StaticImageData
  imageSrc?: string
  imageAlt?: string
  price: number
  discount?: number
  amount: number
  details?: []
}
export interface ICartItem {
  cartItems: cartItemType[]
  amount: number
  totalPrice: number
  totalDiscount: number
  netPrice: number
}

export interface productProp {
  name: string
  price: number
  src: string
}

interface itemsType {
  name: string
}

export interface categoriesType {
  state: string
  error: string
  data: {
    categories: {
      name: string;
      subcategories: string[],
      items: itemsType[]
    }[]
  } | null
}