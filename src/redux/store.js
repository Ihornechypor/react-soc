import messagesReducer from "./reducers/messagesReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarRecer from "./reducers/sidebarReducer";

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

export default store;
window.store = store;
