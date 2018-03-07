import { FETCH_FRIENDS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      return action.payload;
    default:
      return state;
  }
}
