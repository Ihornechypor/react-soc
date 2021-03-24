import React from "react";
import classes from "./MessagesLetters.module.css";

const MessagesLetters = (props) => {
  return (
    <div className={classes.messages__letters_box}>
      {props.msgs.map((item, index) => (
        <p key={index} className={classes.messages__letter}>
          {item.text}
        </p>
      ))}
    </div>
  );
};

export default MessagesLetters;
