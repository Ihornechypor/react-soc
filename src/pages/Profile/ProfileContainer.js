import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/reducers/profileReducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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

export default connect(mapStateToProps, { setUserProfile })(withURLDataCC);
