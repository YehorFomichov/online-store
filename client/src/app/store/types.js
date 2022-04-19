import { createSlice } from '@reduxjs/toolkit'
import typesService from '../services/types.service'
const typesSlice = createSlice({
  name: 'type',
  initialState: {
    entities: null,
    error: null,
    isLoading: true
  },
  reducers: {
    typeRequsted: (state) => {
      state.isLoading = true
    },
    typeReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    typeRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: typesReducer } = typesSlice
const { typeRequsted, typeReceived, typeRequestFailed } = typesSlice.actions

export const loadTypes = () => async (dispatch) => {
  dispatch(typeRequsted())
  try {
    const content = await typesService.getTypes()
    dispatch(typeReceived(content))
  } catch (error) {
    dispatch(typeRequestFailed(error))
  }
}
export const getTypeById = (id) => (state) => {
  if (state.type.entities) return state.type.entities.find((e) => e._id === id)
}
export const getTypesLoadingStatus = () => (state) => state.type.isLoading

export default typesReducer
