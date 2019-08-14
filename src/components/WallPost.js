import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditPostForm from './forms/EditPostForm'
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { updatePost, editPost, deletePost } from '../actions/postActions';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import indigo from '@material-ui/core/colors/indigo';

// A post as it appears on the ReactiWall
class WallPost extends Component {
  constructor (props) {
    super(props);
    this.state = {
      openDeleteDialog: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.editPost = this.editPost.bind(this);
    this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  onSubmit (id, values) {
    const data = { id: id, content: values.content};
    this.props.updatePost(data);
  }

  editPost() {
    const postId = this.props.post.id
    if(this.props.editingPostId === postId) {
      this.props.editPost(null)
    } else {
      this.props.editPost(postId)
    }
  }

  toggleDeleteDialog() {
    if(this.state.openDeleteDialog === true) {
      this.setState({ openDeleteDialog: false })
    } else {
      this.setState({ openDeleteDialog: true })
    }
  }

  deletePost() {
    const postId = this.props.post.id
    this.props.deletePost(postId)
    this.toggleDeleteDialog()
  }

  render () {
  const post = this.props.post
  const avatarStyle = {
    background: indigo[400]
  };
  const headerStyle = {
    background: indigo[200]
  };
  return (
    <Grid item xs={7}>
      <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          aria-describedby="delete-dialog-description"
        >
          <DialogTitle id="delete-dialog-title">{"Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="delete-dialog-description">
              Are you sure you want to delete this post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button  onClick={this.toggleDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deletePost} color="secondary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        <Card>
          <CardHeader
            style={headerStyle}
            avatar={
              <Avatar style={avatarStyle}>{post.user.charAt(0)}</Avatar>
            }
            action={
              <Grid
                container
                direction="row-reverse">
                <Grid item>
                  <IconButton aria-label="edit" onClick={this.editPost}>
                    <EditIcon />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton aria-label="delete" onClick={this.toggleDeleteDialog}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
          }
            title={post.user}
          />

        <CardContent>
          <p hidden={this.props.editingPostId === post.id}>{post.postContent}</p>

          <div hidden={this.props.editingPostId !== post.id}>
            <EditPostForm
              onSubmit={this.onSubmit.bind(this, post.id)}
              ></EditPostForm>
          </div>
        </CardContent>

        </Card>
    </Grid>
  )}
}

WallPost.propTypes = {
  updatePost: PropTypes.func.isRequired,
  editingPostId: PropTypes.string,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  editingPostId: state.posts.editingPostId
});

export default connect(mapStateToProps, { updatePost, editPost, deletePost })(WallPost);
