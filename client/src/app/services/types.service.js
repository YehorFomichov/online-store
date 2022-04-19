import httpService from './http.service'
const typeEndToint = 'type/'

const typesService = {
  getTypes: async () => {
    const { data } = await httpService.get(typeEndToint)
    return data
  }
}
export default typesService
