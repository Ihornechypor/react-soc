import React from "react";
import Posts from "./Posts";

import {
  addPostActionCreator,
  onPostChageActionCreator,
} from "../../redux/reducers/profileReducer";

const PostsContainer = (props) => {
  let state = props.store.getState();

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChage = (text) => {
    let action = onPostChageActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Posts
      postChage={onPostChage}
      addPost={onAddPost}
      posts={state.profilePage.userPosts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default PostsContainer;
