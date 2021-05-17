import React from "react";
import { Redirect } from "react-router-dom";

const withAuthRedirect = (Component) => {
  class RedirectComponet extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  return RedirectComponet;
};

export default withAuthRedirect;
