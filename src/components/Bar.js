import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';

class ReactiBookBar extends Component {
render() {
    return (
      <AppBar position="static" style={{backgroundColor: indigo[500],  margin: 30}}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            { this.props.barName }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ReactiBookBar;
