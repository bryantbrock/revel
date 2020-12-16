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
  const fav = {
    books: [
      {rank: 1, title: 'Failure of Nerve', author: 'Edwin Friedman'},
      {rank: 2, title: 'Antifragile', author: 'Nassim Taleb'},
      {rank: 3, title: 'Hamlet', author: 'Shakespeare'},
    ],
    movies: [
      {rank: 1, title: 'Ratatouille'},
      {rank: 2, title: 'Moneyball'},
      {rank: 3, title: 'Shaw Shank Redemption'},
    ],
    food: [
      {rank: 1, title: 'Donuts'},
      {rank: 2, title: 'Cheese'},
      {rank: 3, title: 'Carrots'},
    ]
  }
  dispatch(Favorites.actions.isLoading())
  dispatch(Favorites.actions.loadFavorites(fav))
}

// Constants
export const staticFavorites = ['books', 'movies', 'food']

export default Favorites