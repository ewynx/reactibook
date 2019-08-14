import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import ReactiWall from './ReactiWall';
import CreateTextPost from './CreateTextPost'
import ReactiBookBar from './Bar'
import LoginForm from './forms/LoginForm'
import { SubmissionError } from 'redux-form'
import './styles.css'

class MainPage extends Component {
  constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this);
  }

  validLogin (values) {
    return values && values.username && values.username !== "" && values.password && values.password !== ""
  }

  onSubmit (values) {
    if(!this.validLogin(values)) {
      throw new SubmissionError({
        _error: 'Please fill out all fields!'
      })
    }

    const data = {
      username: values.username,
      password: values.password
    };

    this.props.login(data);
  }

  render () {
    const showWall = this.props.loggedIn === true
    const barName = showWall ? "ReactiBook" : "Login";

    return (
      <div>
        <ReactiBookBar barName={barName}></ReactiBookBar>

        <div id="login" hidden={showWall}>
          <LoginForm
            onSubmit={this.onSubmit}></LoginForm>
            <div className="error">{this.props.loginError}</div>
        </div>

        <div id="postsContent" hidden={!showWall}>
          <Grid
            container
            justify="center"
            spacing={5}>
              <Grid item xs={6}>
                <CreateTextPost></CreateTextPost>
              </Grid>
              <ReactiWall></ReactiWall>

          </Grid>

        </div>
      </div>
    )}
}

MainPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  loginError: state.login.loginError
});

export default connect(mapStateToProps, { login })(MainPage)
