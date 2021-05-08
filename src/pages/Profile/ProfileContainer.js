import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router";
import { getThisUserData } from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = 2;
    }

    this.props.getThisUserData(userID);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;

    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let withURLDataCC = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getThisUserData })(withURLDataCC);
