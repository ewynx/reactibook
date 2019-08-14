import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './styles.css'
import PostForm from './forms/PostForm'
import { SubmissionError } from 'redux-form'
import indigo from '@material-ui/core/colors/indigo';

class CreateTextPost extends Component {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validPost (values) {
    return values && values.postContent && values.postContent !== "" && (values.shareWith === 'friends' || values.shareWith === 'public' )
  }

  onSubmit (values) {
    if(!this.validPost(values)) {
      throw new SubmissionError({
        _error: 'Please fill out all fields!'
      })
    }

    const post = {
      user: this.props.user,
      postContent: values.postContent,
      shareWith: values.shareWith
    };

    this.props.createPost(post);
  }

  render () {
    const style = {
      padding: '10px',
      background: indigo[200]
    };

    return (
        <Card style={style}>
          <CardContent>
            <PostForm onSubmit={this.onSubmit}></PostForm>
          </CardContent>
        </Card>
    )
  }
}

CreateTextPost.propTypes = {
  createPost: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  user: state.login.user
});

export default connect(mapStateToProps, { createPost })(CreateTextPost);
