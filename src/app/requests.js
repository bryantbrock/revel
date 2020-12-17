import axios from 'axios'

export const baseUrl = 'https://us-central1-website-api-89a0d.cloudfunctions.net/api'

// Custom request creator
const createRequest = (method, url) => (endpoint = null, data, config = {}, token = null) => {
  const fullPath = endpoint ?
    `${baseUrl}/${url}/${endpoint}/` :
    `${baseUrl}/${url}/`

  config = token ? {...config, headers: {...config.headers, authorization: `Token ${token}`}} : config

  return ['post', 'put', 'patch'].includes(method) ?
    axios[method](fullPath, data, config) :
    axios[method](fullPath, config)
}


// Requests
export const getFavorites = createRequest('get', 'favorites')
export const getPosts = createRequest('get', 'posts')