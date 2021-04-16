const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "UPD-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 3,
      text: state.newPostText,
      likes: 0,
    };
    state.userPosts.push(newPost);
    state.newPostText = "";
  } else if (action.type === ADD_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
};

export default profileReducer;
