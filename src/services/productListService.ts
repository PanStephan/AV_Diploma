import axios from 'axios'

export default class ProductListService {
  async getProductList() {
    return await axios('/api/db')
  }
}
