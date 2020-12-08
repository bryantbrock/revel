import {combineReducers} from 'redux'
import {Favorites, Posts} from 'app/state'

export default combineReducers({
  favorites: Favorites.reducer,
  posts: Posts.reducer,
})