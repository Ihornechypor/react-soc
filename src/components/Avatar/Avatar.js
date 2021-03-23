import React from "react";
import AvatartIcon from "../../assets/Avatar/user.svg";
import classes from "./Avatar.module.css";

const Avatar = () => (
  <div className={classes.avatar__box}>
    <img src={AvatartIcon} className={classes.avatar__img} />
  </div>
);

export default Avatar;
