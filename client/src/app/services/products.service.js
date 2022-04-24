import httpService from './http.service'
const productEndPoint = '/product'

const productsService = {
  get: async () => {
    const { data } = await httpService.get(productEndPoint)
    return data
  }
}
export default productsService
