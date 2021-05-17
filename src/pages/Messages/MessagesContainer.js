import Messages from "./Messages";
import {
  newMessagesCreator,
  sendNewMessageCreator,
} from "../../redux/reducers/messagesReducer";
import { connect } from "react-redux";
import withAuthRedirect from "../../components/hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
