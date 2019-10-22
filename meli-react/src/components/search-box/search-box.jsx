import React, {useState} from 'react'
import './search-box.scss'
import {FaSearch} from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
const SearchBox = () => {
  const [searchBoxInput, setSearchBoxInput] = useState('')
  let history = useHistory()

  const searchProduct = () => {
    searchBoxInput === ''
      ? alert('Please enter an item')
      : history.push(`/items?search=${searchBoxInput}`)
  }
  const redirectHome = () => {
    history.push(`/`)
  }
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchProduct()
    }
  }
  return (
    <div className="search-box">
      <Container className="search-box__container">
        <Row className="search-box__container__row">
          <Col className="search-box__container__col">
            <img
              src={require('../../assets/meli-logo.png')}
              height="200"
              className="search-box__container__meli-logo"
              alt=""
              onClick={redirectHome}
            />
            <div className="search-box__container__search">
              <input
                type="text"
                className="search-box__container__search__input"
                placeholder="Nunca dejes de buscar"
                value={searchBoxInput}
                onChange={e => setSearchBoxInput(e.target.value)}
                onKeyPress={event => {
                  handleKeyPress(event)
                }}
              />
              <div
                className="search-box__container__search__icon"
                onClick={searchProduct}
              >
                <FaSearch className="search-box__container__search__icon__svg" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({})
export default connect(
  mapStateToProps,
  {}
)(SearchBox)
