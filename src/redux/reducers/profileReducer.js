import { usersAPI, profileAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "UPD-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  userPosts: [
    { id: 1, text: "hi", likes: 3 },
    { id: 2, text: "hello", likes: 1 },
  ],
  newPostText: "some text",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        text: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        userPosts: [...state.userPosts, newPost],
        newPostText: "",
      };
    }
    case ADD_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const onPostChageActionCreator = (newText) => ({
  type: ADD_NEW_POST_TEXT,
  newText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getThisUserData = (userID) => {
  return (dispatch) => {
    usersAPI.getProfileData(userID).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userID) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userID).then((data) => {
      dispatch(setUserStatus(data));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;
