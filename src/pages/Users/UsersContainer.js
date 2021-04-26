import { connect } from "react-redux";
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/reducers/usersReducer";
import UsersApiComponent from "./UsersComponent";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNum) => {
      dispatch(setCurrentPageAC(pageNum));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiComponent);

export default UsersContainer;
