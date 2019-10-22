import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './search-results.scss'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {searchItemAction} from '../../state/actions/actions'
import SearchItem from './search-item/search-item'
import Breadcrumb from '../breadcrumb/breadcrumb'
const SearchResults = ({location, searchItemAction, searchResults}) => {
  useEffect(() => {
    const locationParams = queryString.parse(location.search)
    if (searchResults.itemName !== locationParams.search) {
      searchItemAction({itemName: locationParams.search})
    }

    return () => {}
  }, [location.search])

  return (
    <Container className="search-results">
      <Row>
        <Col>
          <div className="search-results__breadcrumb">
            <Breadcrumb categories={searchResults.categories} />
          </div>
        </Col>
      </Row>
      <div className="search-results__items-row">
        {searchResults.items.map(product => (
          <SearchItem key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}
const mapStateToProps = state => ({
  searchResults: state.searchResults,
})
export default connect(
  mapStateToProps,
  {searchItemAction}
)(SearchResults)
