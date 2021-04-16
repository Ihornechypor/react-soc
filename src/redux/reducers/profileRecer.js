const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "UPD-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 3,
      text: state.profilePage.newPostText,
      likes: 0,
    };
    state.profilePage.userPosts.push(newPost);
    state.profilePage.newPostText = "";
  } else if (action.type === ADD_NEW_POST_TEXT) {
    state.profilePage.newPostText = action.newText;
  }

  return state;
};

export default profileReducer;
