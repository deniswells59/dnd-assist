import * as types from '../constants/ActionTypes';
import * as outgoingActions from './outgoingActions';
import * as incomingActions from './incomingActions';

export const socketActions = {
  outgoing: { ...outgoingActions },
  incoming: { ...incomingActions },
}

// These are all internal actions
// Mostly keeping state for UI

export const changeEditingStatus = (isEditting, items) => ({
  type: types.CHANGE_EDITTING_STATUS,
  isEditting,
  items,
});

export const updateUserAttempt = user => ({
  type: types.UPDATE_USER_ATTEMPT,
  user
});

export const playSound = (sound, playerId) => ({
  type: types.PLAY_SOUND,
  sound,
  playerId,
});

export const resetSound = () => ({
  type: types.RESET_SOUND
})

export const userLoginAttempt = credentials => ({
  type: types.ATTEMPT_USER_LOGIN,
  credentials
})

export const checkUser = () => ({
  type: types.CHECK_USER
});

export const socketOpened = () => ({
  type: types.SOCKET_OPEN,
});

export const updateTimer = timer => ({
  type: types.UPDATE_TIMER,
  timer,
});
