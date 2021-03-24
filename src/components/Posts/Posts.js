import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={classes.posts__box}>
      <div className={classes.post__new}>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <h3>My posts</h3>
      <ul className={classes.post__list}>
        <Post msg="mow are yoy" likes={3} />
        <Post msg="this is my first post" likes={2} />
      </ul>
    </div>
  );
};

export default Posts;
