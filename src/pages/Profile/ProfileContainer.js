import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router";
import { getThisUserData } from "../../redux/reducers/profileReducer";
import withAuthRedirect from "../../components/hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = 2;
    }

    this.props.getThisUserData(userID);
  }
  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let withURLDataCC = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getThisUserData })(withURLDataCC);
