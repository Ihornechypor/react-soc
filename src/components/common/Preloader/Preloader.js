import React from "react";
import preload from "../../../assets/img/loaders/preloader.gif";
import classes from "./Preloader.module.css";

const Preloader = () => {
  return (
    <>
      <img src={preload} alt="" className={classes.preloader__img} />
    </>
  );
};

export default Preloader;
