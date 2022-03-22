import httpService from './http.service'
const menEndPoint = 'men/'

const productsService = {
  get: async () => {
    const { data } = await httpService.get(menEndPoint)
    return data
  }
}
export default productsService
