import React from "react";
import MessagesAutors from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import classes from "./Messages.module.css";

const Messages = (props) => {
  const onAddAnswer = () => {
    props.addAnswer();
  };
  const onNewMessageChage = (e) => {
    let newMessage = e.target.value;
    props.newMessageChage(newMessage);
  };

  return (
    <div className={classes.messages__box}>
      <MessagesAutors data={props.msgData.messagesData} />
      <MessagesLetters msgs={props.msgData.messagesText} />
      <div>
        <textarea
          value={props.msgData.messagesNewTexts}
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
