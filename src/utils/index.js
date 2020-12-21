import {Favorites, Blog} from 'app/state'
import {loadPosts} from 'app/state/blog'
import {getFavoritesData} from 'app/state/favorites'

export const toHuman = str =>
  str.split(' ')
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join(' ')

export const toLowerCase = str =>
  str.split(' ')
    .map(str => str[0].toLowerCase() + str.slice(1))
    .join(' ')

export const humanToSlug = str =>
  str.split(' ')
    .map(str => str[0].toLowerCase() + str.slice(1))
    .join('-')


export const isEmpty = obj => !Object.keys(obj).length;

// Date Time
export const toHumanDate = dateString =>
  new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

// Local storage stuff
export const persist = obj => {
  const keys = Object.keys(obj)

  // Need to encode and decode into json
  // for proper data format. Currently needs
  // parsing in order to get accessed I think.
  keys.forEach(key => localStorage.setItem(key, obj[key]))
}
export const isValid = ttl => {
  if (!ttl) {
    return false
  }

  const now = new Date().toISOString()
  const ttlAsDate = new Date(ttl)

  ttlAsDate.setHours(ttlAsDate.getHours() + 2)

  const maxTtl = ttlAsDate.toISOString()

  return maxTtl < now
}
export const setLocalToState = () => {
  const {posts} = localStorage.getItem('blog')
  const fav = localStorage.getItem('favorites')

  Blog.actions.loadPosts(posts)
  Favorites.actions.loadFavorites(fav)
}
export const resetLocalAndFetch = () => {
  localStorage.clear()

  persist({ttl: new Date().toISOString()})

  loadPosts()
  getFavoritesData()
}