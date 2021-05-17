import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = (Component) => {
  class RedirectComponet extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponet
  );

  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
