const SEND_MESSAGE = "SEND-MESSAGE";
const UPD_NEW_MESSAGES_TEXTS = "UPD-NEW-MESSAGES_TEXTS";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case UPD_NEW_MESSAGES_TEXTS:
      state.messagesNewTexts = action.newMessage;
      return state;
    case SEND_MESSAGE:
      let body = state.messagesNewTexts;
      state.messagesNewTexts = "";
      state.messagesText.push({ id: 4, text: body });
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
