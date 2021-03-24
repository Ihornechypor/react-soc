import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";

const Messages = () => (
  <div className={classes.messages__box}>
    <ul className={classes.messages__autors}>
      <li
        className={`${classes.messages__autor} ${classes.messages__autor_active}`}
      >
        <NavLink to="/messages/1">ihor</NavLink>
      </li>
      <li className={classes.messages__autor}>
        <NavLink to="/messages/2">roman</NavLink>
      </li>
    </ul>
    <div className={classes.messages__letters}>
      <p className={classes.messages__letter}>1</p>
      <p className={classes.messages__letter}>2</p>
      <p className={classes.messages__letter}>3</p>
    </div>
  </div>
);

export default Messages;
