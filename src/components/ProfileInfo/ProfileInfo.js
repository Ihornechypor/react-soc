import React from "react";
import Preloader from "../common/Preloader/Preloader";
// import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <p>{props.profile.fullName}</p>
    </div>
  );
};

export default ProfileInfo;
