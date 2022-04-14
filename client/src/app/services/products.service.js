import httpService from './http.service'
const productEndPoint = 'product/'

const productsService = {
  get: async (sex, category) => {
    const { data } = await httpService.get(
      productEndPoint + `${sex}/${category}/`
    )
    return data
  },
  fetchAll: async () => {
    const data = await httpService.get(productEndPoint)
    console.log('data', data)
    return data
  }
}
export default productsService
