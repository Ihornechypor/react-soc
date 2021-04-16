const SEND_MESSAGE = "SEND-MESSAGE";
const UPD_NEW_MESSAGES_TEXTS = "UPD-NEW-MESSAGES_TEXTS";

const messagesReducer = (state, action) => {
  if (action.type === UPD_NEW_MESSAGES_TEXTS) {
    state.messagesPage.messagesNewTexts = action.newMessage;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.messagesPage.messagesNewTexts;
    state.messagesPage.messagesNewText = "";
    state.messagesPage.messagesText.push({ id: 4, text: body });
  }
  return state;
};

export default messagesReducer;
