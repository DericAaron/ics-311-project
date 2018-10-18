import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import One from './components/Steps/One/One';
import Two from './components/Steps/Two/Two';
import Three from './components/Steps/Three/Three';
import Four from './components/Steps/Four/Four';
import Menu from './components/Menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header />
          <div className="grid-2">
            <Menu />
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route
                path="/home"
                component={One}
              />

              <Route
                path="/two"
                component={Two}
              />

              <Route
                path="/three"
                component={Three}
              />

              <Route
                path="/four"
                component={Four}
              />
            </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
