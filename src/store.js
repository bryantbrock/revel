import reducer from 'app/reducers'
import {configureStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import {createLogger} from 'redux-logger'
import storage from 'redux-persist/lib/storage'

const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

const logger = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV !== 'production',
  diff: true,
  collapsed: true,
  colors: {
    title: () => '#ccff00',
  }
})


const persistConfig = {key: 'root', storage}
const persistedReducer = persistReducer(persistConfig, reducer)
const middleware = [thunk, logger]

export const store = configureStore({reducer: persistedReducer, middleware})
export const persistor = persistStore(store)
