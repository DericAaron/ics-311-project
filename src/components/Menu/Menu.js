import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
        <Paper>
        <List className="menulist">
                        <Link to="/home">
                        <ListItem button>
                            <ListItemText primary="Step 1" />
                        </ListItem>
                        </Link>

                        <Divider />
                        
                        <Link to="/two">
                        <ListItem button>
                            <ListItemText primary="Step 2" />
                        </ListItem>
                        </Link>

                        <Divider />

                        <Link to="/three">
                        <ListItem button>
                            <ListItemText primary="Step 3" />
                        </ListItem>
                        </Link>

                        <Divider />

                        <Link to="/four">
                        <ListItem button>
                            <ListItemText primary="Step 4" />
                        </ListItem>
                        </Link>
                    </List>
                </Paper>
    );
  }
}

export default Menu;