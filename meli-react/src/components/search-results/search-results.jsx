import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './search-results.scss'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {searchItemAction} from '../../state/actions/actions'
import SearchItem from './search-item/search-item'
const SearchResults = ({location, searchItemAction, searchResults}) => {
  useEffect(() => {
    const locationParams = queryString.parse(location.search)
    searchItemAction({itemName: locationParams.search})
    return () => {}
  }, [location])

  return (
    <Container className="search-results">
      <Row className="search-results__breadcrumb">
        <Col>
          <div>Breadcrumb</div>
        </Col>
      </Row>
      <Row className="search-results__items-row">
        {searchResults.items.map(product => (
          <SearchItem key={product.id} product={product} />
        ))}
      </Row>
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
