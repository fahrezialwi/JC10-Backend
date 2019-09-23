import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route component={Login} path="/" />
            </Switch>
        )
    }
}

export default withRouter(App)
