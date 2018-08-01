import * as types from '../constants/ActionTypes'

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  message,
  author
});

export const unlockPermission = (permission, isAvailable) => ({
  type: types.UNLOCK_PERMISSION,
  permission,
  isAvailable,
});

export const unlockTutorial = () => ({
  type: types.UNLOCK_TUTORIAL_COMPLETE,
});

export const connectToSocket = user => ({
  type: types.CONNECT_TO_SOCKET,
  user
});

export const reconnectToPlayers = () => ({
  type: types.RECONNECT_TO_PLAYERS,
});
