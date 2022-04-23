import httpService from './http.service'
const userEndPoint = 'user/'

const userService = {
  get: async (id) => {
    const { data } = await httpService.get(`${userEndPoint}${id}`)
    return data
  }
}
export default userService
