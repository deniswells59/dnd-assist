import * as types from '../constants/ActionTypes'

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const changeEditingStatus = (isEditting, items) => ({
  type: types.CHANGE_EDITTING_STATUS,
  isEditting,
  items,
});

export const updateUserAttempt = user => ({
  type: types.UPDATE_USER_ATTEMPT,
  user
});

export const updateUserSuccess = user => {
  return {
    type: types.UPDATE_USER_SUCCESS,
    user
  }
}

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export const unlockPermission = (permission, isAvailable) => ({
  type: types.UNLOCK_PERMISSION,
  permission,
  isAvailable,
})

export const receivePermission = (permission, isAvailable) => ({
  type: types.RECEIVE_PERMISSION,
  permission,
  isAvailable,
})

export const playSound = (sound, playerId) => ({
  type: types.PLAY_SOUND,
  sound,
  playerId,
})

export const receiveSound = data => ({
  type: types.RECEIVE_SOUND,
  sound: data.sound,
  playerId: data.playerId,
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
})

export const socketOpened = () => ({
  type: types.SOCKET_OPEN,
});

export const connectToSocket = user => ({
  type: types.CONNECT_TO_SOCKET,
  user
});

export const playerConnected = user => ({
  type: types.PLAYER_CONNECTED,
  user
});

export const playerUpdated = user => ({
  type: types.PLAYER_UPDATED,
  user
});
