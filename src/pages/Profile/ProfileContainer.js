import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router";
import {
  getThisUserData,
  getUserStatus,
  updateUserStatus,
} from "../../redux/reducers/profileReducer";
// import withAuthRedirect from "../../components/hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = 2;
    }

    this.props.getThisUserData(userID);
    this.props.getUserStatus(userID);
  }
  render() {
    return (
      <>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getThisUserData, getUserStatus, updateUserStatus })
)(ProfileContainer);
