import React from "react";
import MessagesAutors from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import classes from "./Messages.module.css";

let messagesData = [
  { id: 1, name: "ihor" },
  { id: 2, name: "Roman" },
  { id: 3, name: "Petro" },
];

let messagesText = [
  { id: 1, text: "hi", likes: 3 },
  { id: 2, text: "hello", likes: 1 },
  { id: 3, text: "pa", likes: 2 },
];

const Messages = () => (
  <div className={classes.messages__box}>
    <MessagesAutors data={messagesData} />
    <MessagesLetters msgs={messagesText} />
  </div>
);

export default Messages;
