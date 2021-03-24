import React from "react";
import MessagesAutor from "../../components/MessagesAutors/MessagesAutors";
import MessagesLetters from "../../components/MessagesLetters/MessagesLetters";
import classes from "./Messages.module.css";

const Messages = () => (
  <div className={classes.messages__box}>
    <ul className={classes.messages__autors_box}>
      <MessagesAutor name="ihor" id="1" active={true} />
      <MessagesAutor name="roman" id="3" />
    </ul>
    <div className={classes.messages__letters_box}>
      <MessagesLetters msg="hi" />
      <MessagesLetters msg="hi1" />
      <MessagesLetters msg="hi2" />
    </div>
  </div>
);

export default Messages;
