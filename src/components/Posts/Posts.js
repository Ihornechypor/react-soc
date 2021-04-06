import React, { useRef } from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = (props) => {
  let postRef = useRef(null);

  const onAddPost = () => {
    console.log(postRef.current.value);
  };

  return (
    <div className={classes.posts__box}>
      <div className={classes.post__new}>
        <div>
          <textarea name="" id="" cols="30" rows="10" ref={postRef}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>add post</button>
        </div>
      </div>
      <h3>My posts</h3>
      <ul className={classes.post__list}>
        {props.userPosts.map((item, index) => {
          return <Post key={index} msg={item.text} likes={item.likes} />;
        })}
      </ul>
    </div>
  );
};

export default Posts;
