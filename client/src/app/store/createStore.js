import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import typesReducer from './types'

const rootReducer = combineReducers({
  products: productsReducer,
  type: typesReducer
})

export function createStore() {
  return configureStore({ reducer: rootReducer })
}
