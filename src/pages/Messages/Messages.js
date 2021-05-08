import React from "react";
import { Redirect } from "react-router";
import MessagesAutors from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import classes from "./Messages.module.css";

const Messages = (props) => {
  let state = props.msgData;
  const onAddAnswer = () => {
    props.addAnswer();
  };
  const onNewMessageChage = (e) => {
    let newMessage = e.target.value;
    props.newMessageChage(newMessage);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className={classes.messages__box}>
      <MessagesAutors data={state.messagesData} />
      <MessagesLetters msgs={state.messagesText} />
      <div>
        <textarea
          value={state.messagesNewTexts}
          placeholder="enter msg"
          onChange={onNewMessageChage}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={onAddAnswer}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
