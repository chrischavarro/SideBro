import axios from 'axios';
import { FETCH_USER, FETCH_TAGS, FETCH_SPOTIFY_INFO, FETCH_ARTISTS, FETCH_REQUESTS,
  APPROVE_REQUEST, DENY_REQUEST, FETCH_USERS, FETCH_ALL_ARTISTS, FILTER_BY_ARTISTS,
  FILTER_BY_TAGS, FETCH_LOCATIONS, FILTER_BY_LOCATIONS, FETCH_FRIENDS, FETCH_CHAT, STORE_CHAT } from './types';
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

export const sendFriendRequest = (user) => async dispatch => {
  axios.post('/api/friend_request', user)
  if (user === '5a6c138722dcc97e0b1171f7') {
    history.push('/chatting')
  }
}

export const fetchRequests = () => async dispatch => {
  axios.get('/api/profile/requests')
    .then(res => {
      dispatch({ type: FETCH_REQUESTS, payload: res.data })
    })
}

export const approveRequest = (request) => async dispatch => {
  axios.post('/api/profile/requests/approve', request);
  dispatch({ type: APPROVE_REQUEST, payload: request });
}

export const denyRequest = (request) => async dispatch => {
  axios.post('/api/profile/requests/deny', request);
  dispatch({ type: DENY_REQUEST, payload: request });
}

export const fetchUsers = () => async dispatch => {
  axios.get('/api/users')
    .then(res => {
      dispatch({ type: FETCH_USERS, payload: res.data })
    })
}

export const fetchAllArtists = () => async dispatch => {
  axios.get('/spotify/artists')
    .then(res => {
      dispatch({ type: FETCH_ALL_ARTISTS, payload: res.data })
    })
}

export const filterByArtists = (artists) => async dispatch => {
  console.log('FILTER ACTION', artists)
  const res = await axios.post(`/api/filter/artists`, artists)
  dispatch({ type: FILTER_BY_ARTISTS, payload: res.data })
}

export const fetchLocations = () => async dispatch => {
  axios.get('/api/locations')
    .then(res => {
      console.log('LOCATIONS', res.data)
    })
}

export const fetchFriends = () => async dispatch => {
  const res = await axios.get('/api/profile/friends')
  dispatch({ type: FETCH_FRIENDS, payload: res.data })
}

export const fetchChat = (friendId) => async dispatch => {
  const res = await axios.get(`/api/chat/${friendId}`);
  dispatch({ type: FETCH_CHAT, payload: res.data});
}

export const storeChat = (friendId, chat) => async dispatch => {
  axios.post(`/api/chat/${friendId}`, chat)
}
