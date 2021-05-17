import React from "react";
import PostsContainer from "../../components/Posts/PostsContainer";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileStatus from "../../components/ProfileInfo/ProfileStatus/ProfileStatus";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <ProfileStatus status={"hello mu friends"} />
      <PostsContainer />
    </>
  );
};

export default Profile;
