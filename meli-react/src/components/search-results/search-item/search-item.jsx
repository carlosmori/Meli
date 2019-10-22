import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './search-item.scss'
import {useHistory} from 'react-router-dom'
import NumberFormat from 'react-number-format'

const SearchItem = ({product}) => {
  let history = useHistory()
  const productDetailRedirect = () => {
    history.push(`/items/${product.id}`)
  }
  return (
    <Row className="search-results__item" onClick={productDetailRedirect}>
      <Col xs="12" lg="2" className="search-results__item__img-container">
        <img
          className="search-results__item__img-container__img"
          src={product.picture}
          alt=""
        />
      </Col>
      <Col xs="12" lg="8" className="search-results__item__description">
        <h1 className="search-results__item__description__price">
          <NumberFormat
            value={product.price.amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            renderText={value => <div>{value}</div>}
          />
        </h1>
        <h2 className="search-results__item__description__title">{product.title}</h2>
      </Col>
      <Col xs="12" lg="2" className="search-results__item__location">
        <h6 className="search-results__item__location__title">{product.location}</h6>
      </Col>
    </Row>
  )
}
export default SearchItem
