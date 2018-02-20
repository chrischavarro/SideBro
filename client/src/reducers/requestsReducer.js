import { FETCH_REQUESTS, APPROVE_REQUEST, DENY_REQUEST } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_REQUESTS:
      return action.payload;
    case APPROVE_REQUEST:
      // RETURN STATE WITH INDEXOF PAYLOAD REMOVED
      // console.log(action.payload, state)
      let removeIndex = state.map(request => { return request._id; }).indexOf(action.payload)
      return state.filter((item, index) => index !== removeIndex);
      return action.payload;
    case DENY_REQUEST:
      console.log('PAYLOAD', state)
      return action.payload;
    default:
      return state;
  }
}
