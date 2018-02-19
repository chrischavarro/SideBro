import { FETCH_REQUESTS, APPROVE_REQUEST, DENY_REQUEST } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_REQUESTS:
      return action.payload;
    case APPROVE_REQUEST:
      console.log(action.payload)
      return action.payload;
    case DENY_REQUEST:
      console.log('PAYLOAD', state)
      return action.payload;
    default:
      return state;
  }
}
