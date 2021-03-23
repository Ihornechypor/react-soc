import React from "react";
import classes from "./Main.module.css";

const Main = ({ children }) => {
  return <main className={classes.main__box}>{children}</main>;
};

export default Main;
