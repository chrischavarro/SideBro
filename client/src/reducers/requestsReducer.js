import { FETCH_REQUESTS, APPROVE_REQUEST, DENY_REQUEST } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_REQUESTS:
      return action.payload;
    case APPROVE_REQUEST:
      let removeApprovedIndex = state.map(request => { return request._id; }).indexOf(action.payload)
      return state.filter((item, index) => index !== removeApprovedIndex);
      return action.payload;
    case DENY_REQUEST:
      let removeDeniedIndex = state.map(request => { return request._id}).indexOf(action.payload)
      return state.filter((item, index) => index !== removeDeniedIndex);
      return action.payload;
    default:
      return state;
  }
}
