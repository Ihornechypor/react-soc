import React from "react";
import classes from "./Post.module.css";
import Avatar from "../../Avatar/Avatar";

const Post = (props) => {
  return (
    <li className={classes.post__item}>
      <Avatar />

      <div>
        <p>{props.msg}</p>

        <button>like {props.likes}</button>
      </div>
    </li>
  );
};

export default Post;
