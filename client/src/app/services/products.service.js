import httpService from './http.service'
const productEndPoint = '/product'

const productsService = {
  get: async () => {
    const { data } = await httpService.get(productEndPoint)
    return data
  },
  create: async (payload) => {
    const { data } = await httpService.post(productEndPoint, payload)
    return data
  },
  update: async (id, payload) => {
    const { data } = await httpService.patch(
      productEndPoint + '/' + id,
      payload
    )
    return data
  },
  remove: async (id) => {
    const { data } = await httpService.delete(productEndPoint + '/' + id)
    return data
  }
}
export default productsService
