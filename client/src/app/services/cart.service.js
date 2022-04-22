import httpService from './http.service'
const cartEndPoint = 'cart/'

const cartService = {
  getCart: async () => {
    const { data } = await httpService.get(cartEndPoint)
    return data
  },
  addToCart: async (currentUserId, cart) => {
    const { data } = await httpService.post(cartEndPoint, {
      currentUserId,
      cart
    })
    return data
  }
}
export default cartService
