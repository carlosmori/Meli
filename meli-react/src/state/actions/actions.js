import {axios} from '../../utils/http/axios-singleton'
import {SEARCH_ITEMS, ITEM_DETAIL} from '../types/types'
export const searchItemAction = ({itemName}) => dispatch => {
  dispatch({
    type: SEARCH_ITEMS.REQUEST,
  })
  axios
    .get(`/items?q=${itemName}`)
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: SEARCH_ITEMS.SUCCESS,
        payload: {data, itemName},
      })
    )
    .catch(error =>
      dispatch({
        type: SEARCH_ITEMS.FAILED,
        payload: {error: error.message},
      })
    )
}
export const itemDetailAction = ({itemId}) => dispatch => {
  dispatch({
    type: ITEM_DETAIL.REQUEST,
  })
  axios
    .get(`/items/${itemId}`)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: ITEM_DETAIL.SUCCESS,
        payload: {data},
      })
    })
    .catch(error =>
      dispatch({
        type: ITEM_DETAIL.FAILED,
        payload: {error: error.message},
      })
    )
}
