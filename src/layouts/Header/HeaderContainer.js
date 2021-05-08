import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthData } from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    uLogin: state.auth.login,
  };
};

export default connect(mapStateToProps, { getAuthData })(HeaderContainer);
