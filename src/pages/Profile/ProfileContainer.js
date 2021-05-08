import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/reducers/profileReducer";
import { withRouter } from "react-router";
import { getThisUserData } from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getThisUserData(this.props.match.params.userId);
  }
  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let withURLDataCC = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getThisUserData })(
  withURLDataCC
);
