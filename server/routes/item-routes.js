var express = require('express')
var router = express.Router()
var ItemService = require('../services/item-service')
var CategoryService = require('../services/category-service')
var Item = require('../domain/item')
var Category = require('../domain/category')
router.get('/', async function(req, res, next) {
  try {
    if (req.query && req.query.q) {
      const itemName = req.query.q
      const searchResults = await ItemService.searchItems(itemName)
      const mostRepeatedCategoryId = ItemService.getMostRepeatedCategory(
        searchResults.map(item => item.category_id)
      )
      const categories = await CategoryService.searchCategories(mostRepeatedCategoryId)
      const response = {
        author: {
          name: 'Carlos',
          lastname: 'Mori',
        },
        categories: categories.map(category => new Category({label: category.name})),
        items: searchResults.slice(0, 4).map(item => new Item(item)),
      }
      res.send(response)
    } else {
      res.send('Please provide a product')
    }
  } catch (err) {
    next(err)
  }
})
router.get('/:id', async function(req, res, next) {
  try {
    if (req.params && req.params.id) {
      const itemId = req.params.id
      const itemDetail = await ItemService.getItemDetail(itemId)
      const categories = await CategoryService.searchCategories(itemDetail.category_id)
      const response = {
        author: {name: 'Carlos', lastname: 'Mori'},
        item: new Item(itemDetail),
        categories: categories.map(category => new Category({label: category.name})),
      }
      res.send(response)
    } else {
      res.send('Please provide an id')
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
