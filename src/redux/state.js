import { renderTree } from "../render.js";

let state = {
  messagesPage: {
    messagesData: [
      { id: 1, name: "ihor" },
      { id: 2, name: "Roman" },
      { id: 3, name: "Petro" },
    ],
    messagesText: [
      { id: 1, text: "hi" },
      { id: 2, text: "hello" },
      { id: 3, text: "pa" },
    ],
  },
  profilePage: {
    userPosts: [
      { id: 1, text: "hi", likes: 3 },
      { id: 2, text: "hello", likes: 1 },
    ],
    newPostText: "some text",
  },
};

window.state = state;

export default state;

export const addPost = (postMessage) => {
  let newPost = {
    id: 3,
    text: postMessage,
    likes: 0,
  };
  state.profilePage.userPosts.push(newPost);
  renderTree(state);
};

export const updNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderTree(state);
};
