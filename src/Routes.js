import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./DudaTemplates";
import history from './history';
import Login from "./Login";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </Router>
        )
    }
}