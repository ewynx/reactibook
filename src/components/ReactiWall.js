import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';
import './styles.css';
import WallPost from './WallPost'
import Grid from '@material-ui/core/Grid';

// The wall of ReactiBook with all posts
class ReactiWall extends Component {
  componentDidMount () {
    this.props.fetchPosts();
  }

  render () {
    const postItems = this.props.posts.map(post => (
      <WallPost key={post.id} post={post}></WallPost>
    ));

    return (
      <Grid container spacing={3} justify="center">
        {postItems}
      </Grid>
    )
  }
}

ReactiWall.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(ReactiWall);
