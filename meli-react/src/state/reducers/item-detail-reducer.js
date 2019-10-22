import {ITEM_DETAIL} from '../types/types'

// item_detail
const initialState = {
  loading: false,
  detail: {
    item: {},
    categories: [],
  },
  error: {},
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ITEM_DETAIL.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ITEM_DETAIL.SUCCESS:
      const {data} = payload
      return {
        ...state,
        loading: false,
        detail: data,
      }
    case ITEM_DETAIL.FAILED:
      const {error} = payload
      return {
        ...state,
        loading: false,
        detail: {},
        error,
      }
    default:
      return state
  }
}
