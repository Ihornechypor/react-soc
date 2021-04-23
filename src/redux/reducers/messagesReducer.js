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
    case UPD_NEW_MESSAGES_TEXTS: {
      let stateCpoty = { ...state };
      stateCpoty.messagesNewTexts = action.newMessage;
      return stateCpoty;
    }

    case SEND_MESSAGE:
      let stateCpoty = { ...state };
      let body = stateCpoty.messagesNewTexts;
      stateCpoty.messagesNewTexts = "";
      stateCpoty.messagesText = [...state.messagesText];
      stateCpoty.messagesText.push({ id: 4, text: body });
      return stateCpoty;
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
