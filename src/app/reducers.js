import {combineReducers} from 'redux'
import {Favorites, Blog} from 'app/state'

export default combineReducers({
  favorites: Favorites.reducer,
  blog: Blog.reducer,
})