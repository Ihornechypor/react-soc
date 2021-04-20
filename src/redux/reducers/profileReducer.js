const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "UPD-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        text: state.newPostText,
        likes: 0,
      };
      state.userPosts.push(newPost);
      state.newPostText = "";
      return state;
    case ADD_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const onPostChageActionCreator = (newText) => ({
  type: ADD_NEW_POST_TEXT,
  newText,
});

export default profileReducer;
