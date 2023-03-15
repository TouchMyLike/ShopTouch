import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import cart from './features/cartSlice'
import checkOut from './features/checkOutSlice'

const reducers = combineReducers({ cart, checkOut })

const config = {
  key: 'root',
  storage,
  // blacklist: ['cart'], //test
}

const reducer = persistReducer(config, reducers)

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
