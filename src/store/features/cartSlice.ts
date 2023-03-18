import { createSlice } from '@reduxjs/toolkit'
import { StaticImageData } from 'next/image'

export type cartItemType = {
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
const initialState: ICartItem = {
  cartItems: [],
  amount: 0,
  totalPrice: 0,
  totalDiscount: 0,
  netPrice: 0,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.amount++
      const cartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id)
      cartItem ? (cartItem.amount = cartItem.amount + 1) : state.cartItems.push({ ...action.payload, amount: 1 })
    },
    increase: (state, action) => {
      state.amount++
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id)
      state.cartItems[itemIndex].amount += 1
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id)
      state.cartItems[itemIndex].amount > 0 && state.cartItems[itemIndex].amount-- && state.amount--
    },
    remove: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.cartItems = state.cartItems.filter((item) => item.id !== cartItem.id)
          state.amount = state.amount - cartItem.amount
        }
      })
    },
    total: (state) => {
      let totalPrice = 0
      let totalDiscount = 0
      state.cartItems.forEach((cartItem) => {
        const { amount, price, discount } = cartItem
        totalPrice += price * amount
        totalDiscount += ((price * (discount || 0)) / 100) * amount
      })
      state.totalPrice = totalPrice
      state.totalDiscount = totalDiscount
      state.netPrice = totalPrice - totalDiscount
    },
    clear: (state) => {
      state.cartItems = []
      state.amount = 0
    },
  },
})

export const { add, increase, decrease, remove, total, clear } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.cart.cartItems
export default cartSlice.reducer
