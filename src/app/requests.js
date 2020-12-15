import axios from 'axios'

export const baseUrl = process.env.REACT_APP_API_URL

// Custom request creator
const createRequest = (method, url) => (data, config = {}, endpoint = null, token = null) => {
  const fullPath = endpoint ?
    `${baseUrl}/api/${url}/${endpoint}/` :
    `${baseUrl}/api/${url}/`

  config = token ? {...config, headers: {...config.headers, authorization: `Token ${token}`}} : config

  return ['post', 'put', 'patch'].includes(method) ?
    axios[method](fullPath, data, config) :
    axios[method](fullPath, config)
}


// Requests
export const getFavorites = createRequest('get', 'favorites')
export const getPosts = createRequest('get', 'posts')