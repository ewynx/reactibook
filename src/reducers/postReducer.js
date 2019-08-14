import { FETCH_POSTS, EDIT_POST } from '../actions/types';

const initialState = {
  items: [],
  editingPostId: null,
  initialValues: { content: ""}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case EDIT_POST:
    const editingPostId = action.payload
      console.log("postRed editpost payload");
      console.log(action.payload)
      var content = "";
      const currentPost = state.items
        .filter((post) => post.id === editingPostId)
      if(currentPost[0]){
        content = currentPost[0].postContent
      }
      console.log(content)

      return {
        ...state,
        editingPostId: action.payload,
        initialValues: { content: content }
      };
    default: return state;
  };
}
