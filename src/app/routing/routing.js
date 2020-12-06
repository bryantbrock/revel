import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {routes} from 'app/routing'

export class Routing extends React.Component {
  render() {
    return (
      <Switch>
      {routes.map((route, idx) =>
        <Route
          exact
          key={idx}
          path={route.path}
          component={withRouter(route.component)}
          title={route.title} />
        )}
        {/* <Route component={NotFound} /> */}
      </Switch>
    )
  }
}

export default Routing
