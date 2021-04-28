import React from "react";
import PostsContainer from "../../components/Posts/PostsContainer";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <PostsContainer />
    </>
  );
};

export default Profile;
