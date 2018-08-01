import * as types from '../constants/ActionTypes';

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  message,
  author
});

export const receivePermission = (permission, isAvailable) => ({
  type: types.RECEIVE_PERMISSION,
  permission,
  isAvailable,
});

export const tutorialComplete = () => ({
  type: types.RECEIVE_TUTORIAL_COMPLETE,
});

export const receiveSound = data => ({
  type: types.RECEIVE_SOUND,
  sound: data.sound,
  playerId: data.playerId,
});

export const playerConnected = user => ({
  type: types.PLAYER_CONNECTED,
  user
});

export const reconnectAttempt = () => ({
  type: types.ADMIN_RECONNECT_ATTEMPT,
});

export const playerUpdated = user => ({
  type: types.PLAYER_UPDATED,
  user
});
