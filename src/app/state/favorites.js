import {createSlice} from '@reduxjs/toolkit'
import {getFavorites} from 'app/requests'

const initialState = {
  books: [],
  movies: [],
  food: [],
  isLoading: false,
  error: false,
}

export const Favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    isLoading: state => ({isLoading: true, ...state}),
    error: state => ({error: true, ...state}),
    loadFavorites: (state, action) => ({
      ...action.payload,
      isLoading: false,
      error: false,
      ...state,
    })
  }
})

// Actions
export const getFavoritesData = () => async dispatch => {
  dispatch(Favorites.actions.isLoading())

  await getFavorites()
    .then(res => dispatch(Favorites.actions.loadFavorites(res.data)))
    .catch(() => dispatch(Favorites.actions.error()))
}

// Constants
export const staticFavorites = ['books', 'movies', 'food']

export default Favorites