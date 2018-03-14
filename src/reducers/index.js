import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import user from "./user"
import permissions from "./permissions"
import sounds from "./sounds"

const rootReducer = combineReducers({
  sounds,
  permissions,
  messages,
  users,
  user
});

export default rootReducer;
