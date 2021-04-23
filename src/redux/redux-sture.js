import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import messagesReducer from "./reducers/messagesReducer";
import sidebarRecer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sedebarPage: sidebarRecer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
