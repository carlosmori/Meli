import {axios} from '../../utils/http/axios-singleton'
import {SEARCH_ITEM} from '../types/types'
export const searchItemAction = ({itemName}) => dispatch => {
  dispatch({
    type: SEARCH_ITEM.REQUEST,
  })
  axios
    .get(`/items?q=${itemName}`)
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: SEARCH_ITEM.SUCCESS,
        payload: {data},
      })
    )
    .catch(error =>
      dispatch({
        type: SEARCH_ITEM.FAILED,
        payload: {error: error.message},
      })
    )
}
