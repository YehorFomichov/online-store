import { createSlice } from '@reduxjs/toolkit'
import productsService from '../services/products.service'
import _ from 'lodash'
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
    const { content } = await productsService.fetchAll()
    dispatch(productsReceived(content))
  } catch (error) {
    dispatch(productsRequestFailed(error.message))
  }
}
export const getProductsLoadingStatus = () => (state) =>
  state.products.isLoading
export const getProducts =
  ({ sex, category, type }) =>
  (state) => {
    if (state.products.isLoading) return []
    if (!type) {
      return _.toArray(state.products.entities[sex][category])
    }
    return _.toArray(state.products.entities[sex][category][type])
  }
export default productsReducer
