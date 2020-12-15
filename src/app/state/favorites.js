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
    isLoading: state => ({...state, error: false, isLoading: true}),
    error: state => ({...state, error: true}),
    loadFavorites: (state, action) => ({
      ...state,
      books: action.payload.books,
      movies: action.payload.movies,
      food: action.payload.food,
      isLoading: false,
      error: false,
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