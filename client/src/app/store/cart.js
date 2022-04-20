import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    entities: []
  },
  reducers: {
    productAdded: (state, action) => {
      const index = state.entities.findIndex(
        (e) => e._id === action.payload._id
      )
      if (index >= 0) {
        state.entities[index].quontity += 1
      } else {
        state.entities.push(action.payload)
      }
    },
    productRemoved: (state, action) => {
      state.entities.filter((e) => e._id !== action.payload)
    },
    cartProcessed: () => {},
    quontityIncreased: (state, action) => {
      const index = state.entities.findIndex((e) => e._id === action.payload)
      console.log(index)
      if (index >= 0) {
        state.entities[index].quontity += 1
      }
    },
    quontityDecreased: (state, action) => {
      const index = state.entities.findIndex((e) => e._id === action.payload)
      if (index >= 0) {
        if (state.entities[index].quontity > 0)
          state.entities[index].quontity -= 1
      }
    }
  }
})

const { reducer: cartReducer } = cartSlice
const {
  productAdded,
  productRemoved,
  cartProcessed,
  quontityIncreased,
  quontityDecreased
} = cartSlice.actions

export const addProductToCart = (product) => (dispatch) => {
  dispatch(productAdded(product))
}
export const removeProductFromCart = (id) => (dispatch) => {
  dispatch(productRemoved(id))
}
export const buyEverything = () => (state) => {
  return state.cart.entities
}
export const getCart = () => (state) => state.cart.entities
export const increaseProductQuantity = (id) => (dispatch) => {
  dispatch(quontityIncreased(id))
}
export const decreaseProductQuantity = (id) => (dispatch) => {
  dispatch(quontityDecreased(id))
}
export const getTotalPrice = () => (state) => {
  if (state.cart.entities.length === 0) return 0
  let totalPrice = 0
  for (const el of state.cart.entities) {
    totalPrice += el.quontity * el.price
  }
  return totalPrice
}
export default cartReducer
