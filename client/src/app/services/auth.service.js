import httpService from './http.service'
import localStorageService from './localStorage.service'

const authService = {
  register: async ({ email, password }) => {
    const url = '/auth/signUp'
    const { data } = await httpService.post(url, {
      email,
      password,
      returnSecureToken: true
    })
    return data
  },
  logIn: async ({ email, password }) => {
    const url = '/auth/signInWithPassword'
    const { data } = await httpService.post(url, {
      email,
      password,
      returnSecureToken: true
    })
    return data
  },
  refresh: async () => {
    const { data } = await httpService.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken()
    })
    return data
  }
}

export default authService
