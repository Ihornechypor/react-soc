import { usersAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_FETCHING = "IS_FETCHING";
const IS_FOLLOWING = "IS_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNum };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };

    case IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFetching
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const acceptFollow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const acceptUnFollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (pageNum) => ({
  type: SET_CURRENT_PAGE,
  pageNum,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

export const togleFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});

export const togleFollowing = (isFetching, userId) => ({
  type: IS_FOLLOWING,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(togleFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(togleFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (uId) => {
  return (dispatch) => {
    dispatch(togleFollowing(true, uId));
    usersAPI.follow(uId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(acceptFollow(uId));
      }
      dispatch(togleFollowing(false, uId));
    });
  };
};

export const unFollow = (uId) => {
  return (dispatch) => {
    dispatch(togleFollowing(true, uId));
    usersAPI.unFollow(uId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(acceptFollow(uId));
      }
      dispatch(acceptUnFollow(false, uId));
    });
  };
};

export default usersReducer;
