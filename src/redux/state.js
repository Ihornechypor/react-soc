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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        text: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.userPosts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPD_NEW_MESSAGES_TEXTS) {
      this._state.messagesPage.messagesNewTexts = action.newMessage;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.messagesNewTexts;
      this._state.messagesPage.messagesNewText = "";
      this._state.messagesPage.messagesText.push({ id: 4, text: body });
      this._callSubscriber(this._state);
    }
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
