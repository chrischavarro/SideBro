import axios from 'axios';
import { FETCH_USER, FETCH_TAGS, FETCH_SPOTIFY_INFO, FETCH_ARTISTS } from './types';
import history from '../history';

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
  axios.get('https://api.spotify.com/v1/me/top/artists', { headers: { Authorization: AuthStr}})
  .then(res => {
    dispatch({ type: FETCH_SPOTIFY_INFO, payload: res.data.items})
  })
  .catch(error => {
    console.log('Error', error)
  })
}

export const submitArtists = (artists) => async dispatch => {
  axios.post('/api/profile/artists', artists)
  history.push('/getting-started')
}

export const fetchArtists = (user) => async dispatch => {
  axios.get(`/api/profile/artists/${user}`)
    .then( res => {
      dispatch({ type: FETCH_ARTISTS, payload: res.data })
    })
}
