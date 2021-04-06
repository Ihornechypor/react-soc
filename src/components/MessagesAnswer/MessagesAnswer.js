import React, { useRef } from "react";

const MessagesAnswer = () => {
  let addAnswerRef = useRef(null);

  const addAnswer = () => {
    console.log(addAnswerRef.current.value);
  };

  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" ref={addAnswerRef}></textarea>
      <button onClick={addAnswer}>add msg</button>
    </div>
  );
};

export default MessagesAnswer;
