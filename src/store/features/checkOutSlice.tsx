import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const checkOutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})
export const { open } = checkOutSlice.actions
export default checkOutSlice.reducer
