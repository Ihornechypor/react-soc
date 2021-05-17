import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setCurrentPage,
  togleFollowing,
  getUsers,
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../../components/common/Preloader/Preloader";
import withAuthRedirect from "../../components/hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageNumber = (pageNum) => {
    this.props.getUsers(pageNum, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageNumber={this.onPageNumber}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            isFollowing={this.props.isFollowing}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    togleFollowing,
    getUsers,
  })
)(UsersContainer);
