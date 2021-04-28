import React from "react";
import Preloader from "../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img
        src={props.profile.photos.large}
        alt=""
        className={classes.profile__info_bg}
      />
    </div>
  );
};

export default ProfileInfo;
