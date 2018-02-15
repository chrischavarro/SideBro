import { FETCH_SPOTIFY_INFO } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_SPOTIFY_INFO:
      return action.payload;
    default:
      return state;
  }
}
