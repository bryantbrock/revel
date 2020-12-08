import axios from 'axios'

export const baseUrl = process.env.BACKEND_URL

// Custom request creator
const createRequest = (method, url) => (data, config = {}, endpoint = null, token = null) => {
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