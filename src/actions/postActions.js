import { FETCH_POSTS, EDIT_POST } from '../actions/types';
import { db } from '../firebase';
import {reset} from 'redux-form';

export const fetchPosts = () => (dispatch) => {
  db.collection('posts').onSnapshot((snapshot) => {
    const data = snapshot.docs.map(doc => {
        return {
          postContent: doc.data().postContent,
          shareWith: doc.data().shareWith,
          user: doc.data().user,
          id: doc.id
        }
      }
    )
    dispatch({
      type: FETCH_POSTS,
      payload: data
    })
  })
}

export const createPost = (postData) => (dispatch) => {
  db.collection('posts').add({
    user: postData.user,
    postContent: postData.postContent,
    shareWith: postData.shareWith
  })
    .then(function (docRef) {
      console.log('Post added with ID: ', docRef.id)
      dispatch(reset('post'));
    })
    .catch(function (error) {
      console.error('Error adding post: ', error)
    })
}

// Announce we are editing the post with given id
export const editPost = (postId) => (dispatch) => {
  dispatch({
    type: EDIT_POST,
    payload: postId
  })
}

// Update the post in firestore
export const updatePost = (data) => (dispatch) => {
  const postRef = db.collection("posts").doc(data.id);

  return postRef.update({
      postContent: data.content
  })
  .then(function() {
      console.log("Post successfully updated!");
      dispatch({
        type: EDIT_POST,
        payload: null
      })
      dispatch(reset('editPost'));
  })
  .catch(function(error) {
      console.error("Error updating post: ", error);
  });
}

export const deletePost = (postId) => (dispatch) => {
  db.collection("posts").doc(postId).delete().then(function() {
    console.log("Post successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing post: ", error);
  });
}
