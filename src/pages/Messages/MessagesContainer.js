import React from "react";
import Messages from "./Messages";
import {
  newMessagesCreator,
  sendNewMessageCreator,
} from "../../redux/reducers/messagesReducer";

const MessagesContainer = (props) => {
  let state = props.store.getState().messagesPage;

  const onAddAnswer = () => {
    props.store.dispatch(sendNewMessageCreator());
  };
  const onNewMessageChage = (text) => {
    props.store.dispatch(newMessagesCreator(text));
  };

  return (
    <Messages
      addAnswer={onAddAnswer}
      newMessageChage={onNewMessageChage}
      msgData={state}
    />
  );
};

export default MessagesContainer;
