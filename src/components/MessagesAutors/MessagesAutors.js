import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MessagesAutors.module.css";

const MessagesAutor = (props) => {
  return (
    <li
      className={`${classes.messages__autor} ${
        props.active ? classes.messages__autor_active : ""
      }`}
    >
      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default MessagesAutor;
