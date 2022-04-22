import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import productsReducer from './products'
import usersReducer from './users'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  users: usersReducer
})

export function createStore() {
  return configureStore({ reducer: rootReducer })
}
