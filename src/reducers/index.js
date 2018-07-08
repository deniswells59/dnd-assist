import { combineReducers } from 'redux';

import admin from './admin';
import socket from './socket';
import messages from './messages';
import user from './user';
import permissions from './permissions';
import sounds from './sounds';
import player from './player';
import timer from './timer';

const rootReducer = combineReducers({
  sounds,
  permissions,
  messages,
  user,
  player,
  admin,
  socket,
  timer,
});

export default rootReducer;
