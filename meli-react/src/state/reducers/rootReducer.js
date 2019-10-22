import {combineReducers} from 'redux'
import searchResults from './search-results-reducer'
import itemDetail from './item-detail-reducer'
export default combineReducers({
  searchResults,
  itemDetail,
})
