import {createSlice} from '@reduxjs/toolkit'
import {getPosts} from 'app/requests'

const initialState = {
  posts: [],
  isLoading: false,
  error: false,
}

export const Blog = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    isLoading: state => ({...state, isLoading: true}),
    error: state => ({...state, error: true}),
    loadPosts: (state, action) => ({
      ...state,
      posts: action.payload,
      isLoading: false,
      error: false,
    })
  }
})

// Actions
export const getPostsData = () => async dispatch => {
  dispatch(Blog.actions.isLoading())

  await getPosts()
    .then(res => dispatch(Blog.actions.loadPosts(res.data)))
    .catch(() => dispatch(Blog.actions.error()))
}

export default Blog