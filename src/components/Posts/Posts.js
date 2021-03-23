import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={classes.post__box}>
      <div className={classes.post__new}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>add post</button>
      </div>
      <ul className={classes.post__list}>
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </div>
  );
};

export default Posts;
