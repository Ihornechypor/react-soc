import React from "react";
import userBg from "../../assets/img/user-bg.jpg";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <img src={userBg} alt="" className={classes.profile__bg} />
      <div>ava + description</div>
      <div>
        my posts
        <div>new post</div>
      </div>
      <div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </>
  );
};

export default Profile;
