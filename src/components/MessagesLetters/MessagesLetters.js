import React from "react";
import classes from "./MessagesLetters.module.css";

const MessagesLetters = (props) => {
  return (
    <div className={classes.messages__letters_box}>
      {props.msgs.map((item, index) => (
        <div key={index}>
          <p className={classes.messages__letter}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessagesLetters;
