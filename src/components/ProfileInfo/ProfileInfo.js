import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img src={props.profileBg} alt="" className={classes.profile__info_bg} />
      <p className={classes.profile__info_text}>{props.profileInfo}</p>
    </div>
  );
};

export default ProfileInfo;
