import React from "react";
import Posts from "./Posts";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChageActionCreator,
} from "../../redux/reducers/profileReducer";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.userPosts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChage: (text) => {
      let action = onPostChageActionCreator(text);
      dispatch(action);
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
