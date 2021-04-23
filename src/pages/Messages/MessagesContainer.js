import Messages from "./Messages";
import {
  newMessagesCreator,
  sendNewMessageCreator,
} from "../../redux/reducers/messagesReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    msgData: state.messagesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnswer: () => {
      dispatch(sendNewMessageCreator());
    },
    newMessageChage: (text) => {
      dispatch(newMessagesCreator(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
