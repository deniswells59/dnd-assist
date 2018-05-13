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

export const updateUserAttempt = user => ({
  type: types.UPDATE_USER_ATTEMPT,
  user
})

export const updateUserSuccess = user => {
  console.log('SUCCESS')
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

export const unlockPermission = permission => ({
  type: types.UNLOCK_PERMISSION,
  permission
})

export const receivePermission = permission => ({
  type: types.RECEIVE_PERMISSION,
  permission
})

export const playSound = sound => ({
  type: types.PLAY_SOUND,
  sound
})

export const receiveSound = sound => ({
  type: types.RECEIVE_SOUND,
  sound
})

export const resetSound = sound => ({
  type: types.RESET_SOUND,
  sound
})

export const userLoginAttempt = credentials => ({
  type: types.ATTEMPT_USER_LOGIN,
  credentials
})

export const checkUser = () => ({
  type: types.CHECK_USER
})
