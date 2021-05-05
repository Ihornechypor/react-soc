import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  togleFetching,
  togleFollowing,
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../../components/common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togleFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.togleFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageNumber = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.togleFetching(true);
    usersAPI.getUsers(pageNum, this.props.pageSize).then((data) => {
      this.props.togleFetching(false);
      this.props.setUsers(data.items);
    });
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
            togleFollowing={this.props.togleFollowing}
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  togleFetching,
  togleFollowing,
})(UsersContainer);
