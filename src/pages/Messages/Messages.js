import React from "react";
import MessagesAutors from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import MessagesAnswer from "../../components/MessagesAnswer/MessagesAnswer";
import classes from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={classes.messages__box}>
      <MessagesAutors data={props.state.messagesData} />
      <MessagesLetters msgs={props.state.messagesText} />
      <MessagesAnswer />
    </div>
  );
};

export default Messages;
