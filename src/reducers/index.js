import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import permissions from "./permissions"
import sounds from "./sounds"

const rootReducer = combineReducers({
  sounds,
  permissions,
  messages,
  users
});

export default rootReducer;
