import React from "react";
import MessagesAutors from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import classes from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={classes.messages__box}>
      <MessagesAutors data={props.state.messagesData} />
      <MessagesLetters msgs={props.state.messagesText} />
    </div>
  );
};

export default Messages;
