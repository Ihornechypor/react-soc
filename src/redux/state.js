import messagesReducer from "./reducers/messagesReducer";
import profileReducer from "./reducers/profileRecer";
import sidebarRecer from "./reducers/sidebarRecer";

const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "UPD-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPD_NEW_MESSAGES_TEXTS = "UPD-NEW-MESSAGES_TEXTS";

let store = {
  _state: {
    messagesPage: {
      messagesData: [
        { id: 1, name: "Ihor" },
        { id: 2, name: "Roman" },
        { id: 3, name: "Petro" },
      ],
      messagesText: [
        { id: 1, text: "hi" },
        { id: 2, text: "hello" },
        { id: 3, text: "pa" },
      ],
      messagesNewTexts: "",
    },
    profilePage: {
      userPosts: [
        { id: 1, text: "hi", likes: 3 },
        { id: 2, text: "hello", likes: 1 },
      ],
      newPostText: "some text",
    },
    sedebarPage: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.sedebarPage = sidebarRecer(this._state.sedebarPage, action);

    this._callSubscriber(this._state);
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const sendNewMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const newMessagesCreator = (newMessage) => ({
  type: UPD_NEW_MESSAGES_TEXTS,
  newMessage,
});

export const onPostChageActionCreator = (newText) => ({
  type: ADD_NEW_POST_TEXT,
  newText,
});

export default store;
window.store = store;
