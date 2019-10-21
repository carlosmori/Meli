import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './product-detail.scss'
import {connect} from 'react-redux'

const ProductDetails = () => {
  return (
    <Container className="product-detail">
      <Row className="product-detail__breadcrumb">
        <Col>
          <div>Breadcrumb</div>
        </Col>
      </Row>
      <Row className="product-detail__item">
        <Col xs lg="8" className="product-detail__item__image">
          <img src={require('../../assets/product-image.webp')} alt="" />
        </Col>
        <Col xs lg="4" className="product-detail__item__price-detail">
          <span>Nuevo-234 Vendido</span>
          <h3>Apple Ipod Touch 16gb Negro Igual a Nuevo</h3>
          <h1>$ 1.980</h1>
          <Button variant="primary">Comprar</Button>
        </Col>
      </Row>
      <Row className="product-detail__description">
        <Col xs lg="8">
          <h2>Descripcion del producto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad sint
            eveniet asperiores excepturi, blanditiis incidunt aliquid perferendis unde!
            Unde est a dolore fugit numquam incidunt ducimus! Nemo, veniam adipisci. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Maiores, deleniti quam.
            Repellat consectetur odio deserunt iure quos molestiae. Non nostrum magnam
            voluptate! Tempore fugiat asperiores ex eaque pariatur doloribus veritatis!
          </p>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({})
export default connect(
  mapStateToProps,
  {}
)(ProductDetails)
