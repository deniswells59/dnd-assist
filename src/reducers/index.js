import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import permissions from "./permissions"

const rootReducer = combineReducers({
  permissions,
  messages,
  users
});

export default rootReducer;
