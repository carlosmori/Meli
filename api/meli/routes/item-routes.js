var express = require('express')
var router = express.Router()
const axios = require('axios')
var Item = require('../domain/item')
var Category = require('../domain/category')
router.get('/', async function(req, res, next) {
  if (req.query && req.query.q) {
    const searchResponse = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
    )
    const items = searchResponse.data.results
    const categoriesResponse = await axios.get(
      `https://api.mercadolibre.com/categories/${items[0].category_id}`
    )
    const itemCategories = categoriesResponse.data.path_from_root
    const newResponse = {
      author: {
        name: 'Carlos',
        lastname: 'Mori',
      },
      categories: itemCategories.map(category => new Category({label: category.name})),
      items: items.slice(0, 4).map(item => new Item(item)),
    }
    res.send(newResponse)
  } else {
    res.send('Please provide a product')
  }
})
router.get('/:id', async function(req, res) {
  let newResponse = {author: {name: 'Carlos', lastname: 'Mori'}}
  if (req.params && req.params.id) {
    const itemId = req.params.id
    const response = await axios.all([
      axios.get(`https://api.mercadolibre.com/items/${itemId}`),
      axios.get(`https://api.mercadolibre.com/items/${itemId}/description`),
    ])
    const item = response[0].data
    const description = response[1].data
    const categoriesResponse = await axios.get(
      `https://api.mercadolibre.com/categories/${item.category_id}`
    )
    const itemCategories = categoriesResponse.data.path_from_root

    description
    newResponse = {
      item: new Item({...item, description}),
      categories: itemCategories.map(category => new Category({label: category.name})),
    }

    res.send(newResponse)

    // .catch(error => console.log(error))
  } else {
    res.send('Please provide an id')
  }
})

module.exports = router
