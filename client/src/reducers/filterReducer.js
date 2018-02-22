import { FETCH_ALL_ARTISTS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ALL_ARTISTS:
      return action.payload;
    default:
      return state;
  }
}
