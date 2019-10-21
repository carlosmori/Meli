import {SEARCH_ITEM} from '../types/types'
const initialState = {
  loading: false,
  categories: [],
  items: [],
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH_ITEM.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SEARCH_ITEM.SUCCESS:
      const {data} = payload
      const {categories, items} = data
      return {
        ...state,
        loading: false,
        categories,
        items,
      }
    case SEARCH_ITEM.FAILED:
      const {error} = payload
      return {
        ...state,
        loading: false,
        categories: [],
        items: [],
        error,
      }
    default:
      return state
  }
}
