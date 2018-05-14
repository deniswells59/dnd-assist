import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import user from "./user"
import permissions from "./permissions"
import sounds from "./sounds"
import player from "./player"

const rootReducer = combineReducers({
  sounds,
  permissions,
  messages,
  users,
  user,
  player,
});

export default rootReducer;
