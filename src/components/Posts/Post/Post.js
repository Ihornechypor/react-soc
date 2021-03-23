import React from "react";
import classes from "./Post.module.css";
import Avatar from "../../Avatar/Avatar";

const Post = () => {
  return (
    <li className={classes.post__item}>
      <Avatar /> Avapost 1
    </li>
  );
};

export default Post;
