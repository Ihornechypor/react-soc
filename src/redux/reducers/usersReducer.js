const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_FETCHING = "IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
      console.log(action.isFetching);
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unFollow = (userId) => ({
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

export default usersReducer;
