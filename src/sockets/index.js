import * as types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList, receivePermission } from '../actions';

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://192.168.150.161:8989');
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
        console.log('UNLOCK SOCKET');
        dispatch(receivePermission(data.permission));
        break;
      default:
        break;
    }
  }

  return socket;
}

export default setupSocket;
