import React from "react";
import userBg from "../../assets/img/user-bg.jpg";
import Posts from "../../components/Posts/Posts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <img src={userBg} alt="" className={classes.profile__bg} />
      <Posts />
    </>
  );
};

export default Profile;
