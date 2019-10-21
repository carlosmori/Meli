var express = require('express')
const axios = require('axios')
var cors = require('cors')

var app = express()
app.use(cors())

app.get('/api/items', function(req, res, next) {
  if (req.query && req.query.q) {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
      .then(response => {
        const products = response.data.results
        //According to docs https://developers.mercadolibre.com.ar/en_us/categories-and-attributes I cant get categories with any category_id of the results
        //I pick the first product of the array, grab its category_id and build the full path for the breadcrumb.
        axios
          .get(`https://api.mercadolibre.com/categories/${products[0].category_id}`)
          .then(category => {
            const path_from_root = category.data.path_from_root
            const newResponse = {
              author: {
                name: 'Carlos',
                lastname: 'Mori',
              },
              categories: path_from_root.map(category => category.name),
              items: products.slice(0, 4).map(product => {
                //Im not seeing any decimals in the response
                const {
                  id,
                  title,
                  price,
                  currency_id,
                  thumbnail,
                  condition,
                  shipping,
                } = product
                return {
                  id,
                  title,
                  price: {
                    currency: currency_id,
                    amount: price,
                    decimals: '',
                  },
                  picture: thumbnail,
                  condition,
                  free_shipping: shipping.free_shipping,
                }
              }),
            }
            res.json(newResponse)
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  } else {
    res.send('Please provide a product')
  }
})
app.get('/api/items/:id', function(req, res, next) {
  let newResponse = {author: {name: 'Carlos', lastname: 'Mori'}}
  if (req.params && req.params.id) {
    const itemId = req.params.id
    axios
      .all([
        axios.get(`https://api.mercadolibre.com/items/${itemId}`),
        axios.get(`https://api.mercadolibre.com/items/${itemId}/description`),
      ])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          const item = firstResponse.data
          const description = secondResponse.data
          const {
            id,
            title,
            price,
            currency_id,
            thumbnail,
            condition,
            shipping,
            sold_quantity,
          } = item
          const {plain_text} = description
          newResponse = {
            ...newResponse,
            id,
            title,
            price: {
              amount: price,
              currency: currency_id,
              decimals: '',
            },
            picture: thumbnail,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity,
            description: plain_text,
          }
          res.send(newResponse)
        })
      )
      .catch(error => console.log(error))
  }
})

app.listen(1000, function() {
  console.log('Example app listening on port 1000!')
})
