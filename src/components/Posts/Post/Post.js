import React from "react";
import classes from "./Post.module.css";
import Avatar from "../../Avatar/Avatar";

const Post = () => {
  return (
    <li className={classes.post__item}>
      <Avatar />
      <div>
        <p>post 1</p>

        <button>like</button>
      </div>
    </li>
  );
};

export default Post;
