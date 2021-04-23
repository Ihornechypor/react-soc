import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MessagesAutors.module.css";

const MessagesAutor = (props) => {
  return (
    <ul className={classes.messages__autors_box}>
      {props.data.map((item, index) => (
        <li
          key={index}
          className={`${classes.messages__autor} ${
            props.active ? classes.messages__autor_active : ""
          }`}
        >
          <NavLink to={`/messages/${item.id}`}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MessagesAutor;
