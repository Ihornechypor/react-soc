const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "hi",
      satus: "I am some",
      location: { city: "minsk", country: "Belarus" },
      followed: false,
    },
    {
      id: 2,
      fullName: "h33i",
      satus: "I am some",
      location: { city: "kiev", country: "ukraine" },
      followed: false,
    },
    {
      id: 4,
      fullName: "dsf",
      satus: "I am some boss two",
      location: { city: "war", country: "poland" },
      followed: true,
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unFollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
