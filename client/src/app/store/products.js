import { createSlice } from '@reduxjs/toolkit'
import productsService from '../services/products.service'
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true
    },
    productsReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    productsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: productsReducer } = productsSlice
const { productsRequested, productsReceived, productsRequestFailed } =
  productsSlice.actions

export const loadProducts = () => async (dispatch) => {
  dispatch(productsRequested())
  try {
    const { content } = await productsService.get()
    dispatch(productsReceived(content))
  } catch (error) {
    dispatch(productsRequestFailed(error.message))
  }
}
export const getProductsLoadingStatus = () => (state) =>
  state.products.isLoading
export const getAllProducts = () => (state) => {
  return state.products.entities
}
export const getProuctsByType = (sex, category, type) => (state) => {
  if (state.products.isLoading) return []
  if (sex) {
    if (category) {
      if (type) {
        return state.products.entities.filter(
          (e) => e.sex === sex && e.category === category && e.type === type
        )
      }
      return state.products.entities.filter(
        (e) => e.sex === sex && e.category === category
      )
    }
    return state.products.entities.filter((e) => e.sex === sex)
  }
}
export const getProductById = (id) => (state) => {
  if (state.products.entities)
    return state.products.entities.find((e) => e._id === id)
}

export default productsReducer
