import React from 'react';
import logo from './logo.svg';
import './App.css';
import DudaTemplates from './DudaTemplates'
import Routes from './Routes';
import Login from './Login';
import Register from './Register';
import Customer from './Customer';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

function App() {
	
  return (
    <div className="App">

      <Router history={history}>
                <Switch>
                    <Route path="/" exact component={DudaTemplates} />
					<Route path="/DudaTemplates" component={DudaTemplates} />
                    <Route path="/Login" component={Login} />
					<Route path="/Register" component={Register} />
					<Route path="/Customer" component={Customer} />
	            </Switch>
            </Router>
    </div>
  );
}

export default App;
