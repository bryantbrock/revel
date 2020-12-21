import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import reportWebVitals from './reportWebVitals'
import {isValid, setLocalToState, resetLocalAndFetch} from 'utils'
import 'css/base.css'

console.log(localStorage)

const ttl = localStorage.getItem('ttl')
const hydrate = isValid(ttl) ?
  setLocalToState :
  resetLocalAndFetch

// hydrate()


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()