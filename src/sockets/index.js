import * as types from '../constants/ActionTypes';
import * as actions from '../actions';

const address = '192.168.86.70:8989';

const setupSocket = dispatch => {
  const socket = new WebSocket(`ws://${address}`);
  socket.onopen = () => {
    console.log(`Connected to socket at ${address}`)
    dispatch(actions.socketOpened())
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('RECEIVED: ', data);

    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(actions.messageReceived(data.message, data.author));
        break;
      case types.ADD_USER:
        dispatch(actions.addUser(data.name));
        break;
      case types.USERS_LIST:
        dispatch(actions.populateUsersList(data.users));
        break;
      case types.RECEIVE_PERMISSION:
        dispatch(actions.receivePermission(data.permission));
        break;
      case types.RECEIVE_SOUND:
        dispatch(actions.receiveSound(data.sound));
        break;
      case types.PLAYER_CONNECTED:
        dispatch(actions.playerConnected(data.user));
        break;
      default:
        break;
    }
  }

  return socket;
}

export default setupSocket;
