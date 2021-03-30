import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let messagesData = [
  { id: 1, name: "ihor" },
  { id: 2, name: "Roman" },
  { id: 3, name: "Petro" },
];

let messagesText = [
  { id: 1, text: "hi" },
  { id: 2, text: "hello" },
  { id: 3, text: "pa" },
];

let userPosts = [
  { id: 1, text: "hi", likes: 3 },
  { id: 2, text: "hello", likes: 1 },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      messagesData={messagesData}
      messagesText={messagesText}
      userPosts={userPosts}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
