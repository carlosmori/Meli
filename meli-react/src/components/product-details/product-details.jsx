import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './product-detail.scss'
import {connect} from 'react-redux'
import {itemDetailAction} from '../../state/actions/actions'
import Breadcrumb from '../breadcrumb/breadcrumb'
import NumberFormat from 'react-number-format'

const ProductDetails = ({productDetail, match, itemDetailAction}) => {
  useEffect(() => {
    //Verify if I enter via URL and refresh the page, if the product refreshes
    if (match.params.id) {
      itemDetailAction({itemId: match.params.id})
    }
  }, [])
  useEffect(() => {
    console.log(productDetail)
  }, [productDetail])
  return (
    <Container className="product-detail">
      <Row className="product-detail__breadcrumb">
        <Col xs lg="12">
          <Breadcrumb categories={productDetail.categories} />
        </Col>
      </Row>
      <Row className="product-detail__item">
        <Col xs lg="8" className="product-detail__item__image">
          <img src={productDetail.item.picture} alt="" />
        </Col>
        <Col xs lg="4" className="product-detail__item__price-detail">
          <span>
            {productDetail.item.condition} -{' '}
            {productDetail.item.sold_quantity !== 0
              ? productDetail.item.sold_quantity
              : null}{' '}
          </span>
          <h3>{productDetail.item.title}</h3>
          <h1>
            <NumberFormat
              value={productDetail.item.price ? productDetail.item.price.amount : null}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <div>{value}</div>}
            />
            {/* {props.productDetail.item.price ? props.productDetail.item.price.amount : null} */}
          </h1>
          <Button variant="primary">Comprar</Button>
        </Col>
      </Row>
      <Row className="product-detail__description">
        <Col xs lg="8">
          <h2>Descripcion del producto</h2>
          <p>{productDetail.item.description}</p>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  productDetail: state.itemDetail.detail,
})
export default connect(
  mapStateToProps,
  {itemDetailAction}
)(ProductDetails)
