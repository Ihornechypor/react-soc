import React, { useEffect, useRef } from "react";
import MessagesAutors from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import classes from "./Messages.module.css";

const Messages = (props) => {
  const someRef = useRef(null);
  useEffect(() => {
    console.log(someRef);
  });
  return (
    <div className={classes.messages__box}>
      <MessagesAutors data={props.state.messagesData} />
      <MessagesLetters msgs={props.state.messagesText} ref={someRef} />
    </div>
  );
};

export default Messages;
