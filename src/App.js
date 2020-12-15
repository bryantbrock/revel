import React from 'react'
import {Provider} from 'react-redux'
import {Routing} from "app/routing"
import {history} from './history'
import {store} from 'store'
import {Router} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routing />
        </Router>
      </Provider>
    )
  }
}

export default App
