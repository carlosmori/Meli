import {SEARCH_ITEMS} from '../types/types'
const initialState = {
  loading: false,
  categories: [],
  items: [],
  itemName: '',
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH_ITEMS.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SEARCH_ITEMS.SUCCESS:
      const {data, itemName} = payload
      const {categories, items} = data
      return {
        ...state,
        loading: false,
        categories,
        items,
        itemName,
      }
    case SEARCH_ITEMS.FAILED:
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
