import { FETCH_USERS, FILTER_BY_ARTISTS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload
    case FILTER_BY_ARTISTS:
      return action.payload
    default:
      return state
  }
}
