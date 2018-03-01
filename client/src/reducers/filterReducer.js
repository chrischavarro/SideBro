import { FILTER_BY_ARTISTS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case FILTER_BY_ARTISTS:
      return action.payload;
    default:
      return state;
  }
}
