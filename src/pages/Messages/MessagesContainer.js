import Messages from "./Messages";
import {
  newMessagesCreator,
  sendNewMessageCreator,
} from "../../redux/reducers/messagesReducer";
import { connect } from "react-redux";
import withAuthRedirect from "../../components/hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default MessagesContainer;
