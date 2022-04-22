import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import cartService from '../services/cart.service'

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
        state.entities[index].quantity += 1
      } else {
        state.entities.push(action.payload)
      }
    },
    productRemoved: (state, action) => {
      state.entities.filter((e) => e._id !== action.payload)
    },
    quontityIncreased: (state, action) => {
      const index = state.entities.findIndex((e) => e._id === action.payload)
      if (index >= 0) {
        state.entities[index].quantity += 1
      }
    },
    quontityDecreased: (state, action) => {
      const index = state.entities.findIndex((e) => e._id === action.payload)
      if (index >= 0) {
        if (state.entities[index].quantity > 0)
          state.entities[index].quantity -= 1
      }
    },
    cartOrdered: (state) => {
      state.entities = []
    },
    errorAppeared: (state, action) => {
      state.error = action.payload
    }
  }
})

const { reducer: cartReducer } = cartSlice
const {
  productAdded,
  productRemoved,
  quontityIncreased,
  quontityDecreased,
  cartOrdered,
  errorAppeared
} = cartSlice.actions

export const addProductToCart = (product) => (dispatch) => {
  dispatch(productAdded(product))
  toast.success('Product has been successfully added to the cart')
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
    totalPrice += el.quantity * el.price
  }
  return totalPrice
}
export const orderEverything = (currentUserId, cart) => async (dispatch) => {
  try {
    await cartService.addToCart(currentUserId, cart)
    dispatch(cartOrdered())
  } catch (error) {
    dispatch(errorAppeared(error))
  }
}
export default cartReducer
