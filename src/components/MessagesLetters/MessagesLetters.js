import React from "react";
import classes from "./MessagesLetters.module.css";

const MessagesLetters = (props) => {
  return <p className={classes.messages__letter}>{props.msg}</p>;
};

export default MessagesLetters;
