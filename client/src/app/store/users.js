import { createAction, createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import history from '../utils/history'
import generateAuthError from '../utils/generateAuthError'
import userService from '../services/user.service'
const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserLocalId() },
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
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities.push(action.payload)
    },
    userLoggedOut: (state) => {
      state.entities = null
      state.isLoggedIn = false
      state.auth = null
      state.dataLoaded = false
    },
    authRequested: (state) => {
      state.error = null
    }
  }
})

const { reducer: usersReducer } = usersSlice
const {
  authRequestSuccess,
  authRequstFailed,
  userCreated,
  userLoggedOut,
  authRequested
} = usersSlice.actions

const userCreateRequested = createAction('users/userCreateRequested')
const createUserFailed = createAction('users/createUserFailed')
export const logIn =
  ({ payload, redirect }) =>
  async (dispatch) => {
    const { email, password } = payload
    dispatch(authRequested())
    try {
      const data = await authService.logIn({ email, password })
      dispatch(authRequestSuccess({ userId: data.localId }))
      localStorageService.setTokens(data)
      history.push(redirect)
    } catch (error) {
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
export const signUp =
  ({ email, password, ...rest }) =>
  async (dispatch) => {
    dispatch(authRequested())
    try {
      const data = await authService.register({ email, password })
      localStorageService.setTokens(data)
      dispatch(authRequestSuccess({ userId: data.localId }))
      dispatch(
        createUser({
          email,
          image: `https://avatars.dicebear.com/api/avataaars/${(
            Math.random() + 1
          )
            .toString(36)
            .substring(7)}.svg`,
          ...rest
        })
      )
    } catch (error) {
      dispatch(authRequstFailed(error.message))
    }
  }
function createUser(payload) {
  return async function (dispatch) {
    dispatch(userCreateRequested())
    try {
      const { content } = await userService.create(payload)
      dispatch(userCreated(content))
      history.push('/')
    } catch (error) {
      dispatch(createUserFailed(error.message))
    }
  }
}

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn
export const getCurrentUserId = () => (state) => state.users.auth.userId
export const getUsersLoadingStatus = () => (state) => state.users.isLoading
export const getAuthError = () => (state) => state.users.error

export default usersReducer
