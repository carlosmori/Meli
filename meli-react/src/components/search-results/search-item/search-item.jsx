import React from 'react'
import Col from 'react-bootstrap/Col'
import './search-item.scss'
import {useHistory} from 'react-router-dom'

const SearchItem = ({product}) => {
  let history = useHistory()
  const productDetailRedirect = () => {
    alert('holix')
    history.push('/items/1')
  }
  return (
    <div className="search-results__item" onClick={productDetailRedirect}>
      <Col xs lg="2" className="search-results__item__image">
        <img src={product.picture} alt="" />
      </Col>
      <Col xs lg="8" className="search-results__item__description">
        <h2>$ {product.price.amount}</h2>
        <h3>{product.title}</h3>
      </Col>
      <Col xs lg="2" className="search-results__item__location">
        {/* //@todo grab location from api, rework */}
        <h6>Capital Federal</h6>
      </Col>
    </div>
  )
}
export default SearchItem
