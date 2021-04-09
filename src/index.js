import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import { addPost, updNewPostText } from "./redux/state";

let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updNewPostText={updNewPostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

subscribe(renderTree);
renderTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
