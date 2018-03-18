import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import tagReducer from './tagReducer';
import spotifyReducer from './spotifyReducer';
import artistReducer from './artistReducer';
import requestsReducer from './requestsReducer';
import userReducer from './userReducer';
import filterArtistReducer from './filterArtistReducer';
import chatReducer from './chatReducer';
import chatHistoryReducer from './chatHistoryReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  tags: tagReducer,
  artists: spotifyReducer,
  userArtists: artistReducer,
  requests: requestsReducer,
  users: userReducer,
  filterArtists: filterArtistReducer,
  friends: chatReducer,
  chatHistory: chatHistoryReducer
});
