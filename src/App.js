import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {Routing} from "app/routing"
import {history} from './history'
import {store, persistor} from 'store'
import {Router} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Routing />
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
