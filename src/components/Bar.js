import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ReactiBookBar extends Component {
render() {
    return (
      <AppBar  style={{ margin: 20 }} position="static" color="primary">
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
