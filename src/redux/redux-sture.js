import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import messagesReducer from "./reducers/messagesReducer";
import sidebarRecer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authReduser from "./reducers/authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sedebarPage: sidebarRecer,
  usersPage: usersReducer,
  auth: authReduser,
});

let store = createStore(reducers);

window.store = store;
export default store;
