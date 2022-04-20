import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import productsReducer from './products'
import typesReducer from './types'

const rootReducer = combineReducers({
  products: productsReducer,
  type: typesReducer,
  cart: cartReducer
})

export function createStore() {
  return configureStore({ reducer: rootReducer })
}
