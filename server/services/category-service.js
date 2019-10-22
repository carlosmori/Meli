const axios = require('axios')

var CategoryService = {
  searchCategories: async categoryId => {
    const response = await axios.get(
      `https://api.mercadolibre.com/categories/${categoryId}`
    )
    const categories = response.data.path_from_root
    return categories
  },
}
module.exports = CategoryService
