import { createSlice } from '@reduxjs/toolkit'
import { StaticImageData } from 'next/image'

export type cartItemType = { id: number; amount: number; price: number; name: string; image: StaticImageData }
export interface ICartItem {
  cartItems: cartItemType[]
  amount: number
  total: number
}
const initialState: ICartItem = {
  cartItems: [],
  amount: 0,
  total: 0,
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
      let total = 0
      total = state.cartItems[itemIndex].amount * state.cartItems[itemIndex].price
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
      let total = 0
      state.cartItems.forEach((cartItem) => {
        total += cartItem.amount * cartItem.price
      })
      state.total = total
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
