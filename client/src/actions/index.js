import axios from 'axios';
import { FETCH_USER, FETCH_TAGS } from './types';
import history from '../history';
import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
}

// export const fetchTags = () => dispatch => {
//   axios.get('/api/tags')
//     .then((res, err) => {
//       dispatch({ type: FETCH_TAGS, payload: res.data})
//     })
// }

export const fetchTags = () => async dispatch => {
  const res = await axios.get('/api/tags');
  dispatch({ type: FETCH_TAGS, payload: res.data })
}

export const createProfile = (values) => async dispatch => {
  console.log(values)
  history.push('/spotify');
}

export const fetchSpotifyInfo = (accessToken) => async dispatch => {
  const AuthStr = `Bearer ${accessToken}`
  console.log('TOKEN', accessToken)
  axios.get('https://api.spotify.com/v1/me/top/artists', { headers: { Authorization: AuthStr}})
  .then(response => {
    console.log('Resposne', response);
  })
  .catch(error => {
    console.log('Error', error)
  })
}
