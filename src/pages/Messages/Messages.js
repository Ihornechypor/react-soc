import React from "react";
import MessagesAutors from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import {
  newMessagesCreator,
  sendNewMessageCreator,
} from "../../redux/reducers/messagesReducer";
import classes from "./Messages.module.css";

const Messages = (props) => {
  let state = props.store.getState().messagesPage;

  let newMsg = state.messagesNewTexts;

  const onAddAnswer = () => {
    props.store.dispatch(sendNewMessageCreator());
  };
  const onNewMessageChage = (e) => {
    let newMessage = e.target.value;
    props.store.dispatch(newMessagesCreator(newMessage));
  };

  return (
    <div className={classes.messages__box}>
      <MessagesAutors data={state.messagesData} />
      <MessagesLetters msgs={state.messagesText} />
      <div>
        <textarea
          value={newMsg}
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
