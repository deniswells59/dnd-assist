import * as types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList, receivePermission, receiveSound } from '../actions';

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://10.0.0.5:8989');
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author));
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name));
        break;
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      case types.RECEIVE_PERMISSION:
        dispatch(receivePermission(data.permission));
        break;
      case types.RECEIVE_SOUND:
        dispatch(receiveSound(data.sound));
        break;
      default:
        break;
    }
  }

  return socket;
}

export default setupSocket;
