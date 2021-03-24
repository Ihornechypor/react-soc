import React from "react";
import userBg from "../../assets/img/user-bg.jpg";
import Posts from "../../components/Posts/Posts";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <ProfileInfo profileBg={userBg} profileInfo="text text" />
      <Posts />
    </>
  );
};

export default Profile;
