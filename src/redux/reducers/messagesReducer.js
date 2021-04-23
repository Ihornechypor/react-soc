const SEND_MESSAGE = "SEND-MESSAGE";
const UPD_NEW_MESSAGES_TEXTS = "UPD-NEW-MESSAGES_TEXTS";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPD_NEW_MESSAGES_TEXTS:
      return { ...state, messagesNewTexts: action.newMessage };
    case SEND_MESSAGE:
      let body = state.messagesNewTexts;
      return {
        ...state,
        messagesNewTexts: "",
        messagesText: [...state.messagesText, { id: 4, text: body }],
      };
    default:
      return state;
  }
};

export const sendNewMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const newMessagesCreator = (newMessage) => ({
  type: UPD_NEW_MESSAGES_TEXTS,
  newMessage,
});

export default messagesReducer;
