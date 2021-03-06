import { createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import history from '../utils/history'
import generateAuthError from '../utils/generateAuthError'
import userService from '../services/user.service'
import { toast } from 'react-toastify'
const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      dataLoaded: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false
    }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authRequestSuccess: (state, action) => {
      state.auth = action.payload
      state.isLoggedIn = true
    },
    authRequstFailed: (state, action) => {
      state.error = action.payload
    },
    userCreated: (state, action) => {
      state.entities = action.payload
    },
    userLoggedOut: (state) => {
      state.entities = null
      state.isLoggedIn = false
      state.auth = null
      state.dataLoaded = false
    },
    authRequested: (state) => {
      state.error = null
    },
    userRequested: (state) => {
      state.isLoading = true
    },
    userLoaded: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    userLoadingFailed: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    errorOccured: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

const { reducer: usersReducer } = usersSlice
const {
  authRequestSuccess,
  authRequstFailed,
  userLoggedOut,
  authRequested,
  userRequested,
  userLoaded,
  userLoadingFailed,
  errorOccured
} = usersSlice.actions

export const loadUser = (id) => async (dispatch) => {
  dispatch(userRequested())
  try {
    const { content } = await userService.get(id)
    dispatch(userLoaded(content))
  } catch (error) {
    dispatch(userLoadingFailed(error))
  }
}

export const logIn =
  ({ payload, redirect }) =>
  async (dispatch) => {
    const { email, password } = payload
    dispatch(authRequested())
    try {
      const data = await authService.logIn({ email, password })
      dispatch(authRequestSuccess({ userId: data.userId }))
      localStorageService.setTokens(data)
      history.push(redirect)
    } catch (error) {
      toast.dark('Email or password is incorrect')
      const { code, message } = error.response.data.error
      if (code === 400) {
        const errorMessage = generateAuthError(message)
        dispatch(authRequstFailed(errorMessage))
      } else dispatch(authRequstFailed(error.message))
    }
  }
export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData()
  dispatch(userLoggedOut())
  history.push('/')
}
export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested())
  try {
    const data = await authService.register(payload)
    localStorageService.setTokens(data)
    dispatch(authRequestSuccess({ userId: data.userId }))
    history.push('/')
  } catch (error) {
    dispatch(authRequstFailed(error.message))
  }
}

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn
export const getIsAdmin = () => (state) => {
  if (!state.users.entities) return false
  return state.users.entities.isAdmin
}
export const getCurrentUserId = () => (state) => {
  if (!state.users.auth) {
    return ''
  }
  return state.users.auth.userId
}
export const getAuthError = () => (state) => state.users.error
export const getCurrentUser = () => (state) => state.users.entities

export default usersReducer
