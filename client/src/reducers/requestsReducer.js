import { FETCH_REQUESTS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_REQUESTS:
      return action.payload;
    default:
      return state;
  }
}
