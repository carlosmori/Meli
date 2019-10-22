'use strict'

module.exports = class Item {
  constructor({
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping = {},
    address = {},
    sold_quantity = null,
    description = {},
  }) {
    this.id = id
    this.title = title
    this.price = {
      currency: currency_id,
      amount: price,
      decimals: '',
    }
    this.picture = thumbnail
    this.condition = condition
    this.free_shipping = shipping.free_shipping
    this.sold_quantity = sold_quantity
    this.description = description.plain_text
    this.location = address.city_name
  }
}
