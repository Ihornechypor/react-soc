import React from "react";
import userBg from "../../assets/img/user-bg.jpg";
import PostsContainer from "../../components/Posts/PostsContainer";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
// import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <ProfileInfo profileBg={userBg} profileInfo="text text" />
      <PostsContainer />
    </>
  );
};

export default Profile;
