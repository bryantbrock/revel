import {createSlice} from '@reduxjs/toolkit'
import {getPosts} from 'app/requests'

const initialState = {
  posts: [],
  isLoading: false,
  error: false,
}

export const Posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    isLoading: state => ({...state, isLoading: true}),
    error: state => ({...state, error: true}),
    loadPosts: (state, action) => ({
      ...state,
      ...action.payload,
      isLoading: false,
      error: false,
    })
  }
})

// Actions
export const getPostsData = () => async dispatch => {
  dispatch(Posts.actions.isLoading())

  await getPosts()
    .then(res => dispatch(Posts.actions.loadPosts(res.data)))
    .catch(() => dispatch(Posts.actions.error()))
}

export default Posts