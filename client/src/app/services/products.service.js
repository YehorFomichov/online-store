import httpService from './http.service'
const productsEndPoint = 'products/'

const productsService = {
  get: async (sex, category) => {
    const { data } = await httpService.get(
      productsEndPoint + `${sex}/${category}/`
    )
    return data
  },
  fetchAll: async () => {
    const { data } = await httpService.get(productsEndPoint)
    return data
  }
}
export default productsService
