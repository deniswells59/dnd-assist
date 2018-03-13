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

export const playSound = permission => ({
  type: types.PLAY_SOUND,
})
