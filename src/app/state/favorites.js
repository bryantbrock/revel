import {createSlice} from '@reduxjs/toolkit'
import {persist} from 'utils'

const fav = {
  food: [
    {rank: 1, title: 'Chickfila Sandwich', author: 'I know this is cheating, but they are sooo good.'},
    {rank: 2, title: 'Coconut Soup', author: 'Cilantro, Broth, Mushrooms, red chili paste, coconut milk (obviously), chicken'},
    {rank: 3, title: 'Cinnamon Rolls', author: 'Preferrably pecan rolls please. With a cup of coffee in addition.'},
  ],
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
  quotes: [
    {rank: 1, author: '“Tolstoy opens Anna Karenina by observing: \
      “All happy families are alike; each unhappy family is unhappy in its own way. \
      ” Business is the opposite. All happy companies are different: each one earns a \
      monopoly by solving a unique problem. All failed companies are the same: they \
      failed to escape competition.”  -- Peter Thiel'},
    {rank: 2, author: '“We learn who we are in practice, not in theory.”  -- David Epstein'},
  ],
}

const initialState = {
  books: [],
  movies: [],
  food: [],
  quotes: [],
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
      quotes: action.payload.quotes,
      isLoading: false,
      error: false,
    })
  }
})

// Actions
export const getFavoritesData = () => async dispatch => {
  dispatch(Favorites.actions.isLoading())
  dispatch(Favorites.actions.loadFavorites(fav))
  persist({favorites: fav})
}

// Constants
export const staticFavorites = Object.keys(fav)

export default Favorites