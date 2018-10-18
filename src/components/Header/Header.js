import React, { Component } from 'react';

import './Header.css'

import AppBar from '@material-ui/core/AppBar';

class Header extends Component {

  render() {
    return (
        <AppBar className="header" position="Static">
          <h1>ICS - 311 Project</h1>
          <h4>By: Deric Aaron</h4>
        </AppBar>

    );
  }
}

export default Header;