const axios = require('axios')

var ItemService = {
  searchItems: async itemName => {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${itemName}`
    )
    const items = response.data.results
    return items
  },
  getItemDetail: async itemId => {
    const responses = await axios.all([
      axios.get(`https://api.mercadolibre.com/items/${itemId}`),
      axios.get(`https://api.mercadolibre.com/items/${itemId}/description`),
    ])
    return {...responses[0].data, description: responses[1].data}
  },

  getMostRepeatedCategory: array => {
    if (array.length == 0) return null
    let modeMap = {}
    let maxEl = array[0],
      maxCount = 1
    for (let i = 0; i < array.length; i++) {
      let el = array[i]
      if (modeMap[el] == null) modeMap[el] = 1
      else modeMap[el]++
      if (modeMap[el] > maxCount) {
        maxEl = el
        maxCount = modeMap[el]
      }
    }
    return maxEl
  },
}
module.exports = ItemService
