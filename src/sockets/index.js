import * as types from '../constants/ActionTypes';

import { socketOpened, socketActions } from '../actions';
import storage from '../storage';

const address = '192.168.86.66:8989';

const setupSocket = dispatch => {
  const socket = new WebSocket(`ws://${address}`);
  socket.onopen = () => {
    console.log(`Connected to socket at ${address}`)
    dispatch(socketOpened())
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('RECEIVED FROM SOCKET: ', data);

    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(socketActions.incoming.messageReceived(data.message, data.author));
        break;
      case types.RECEIVE_PERMISSION:
        storage.permissions.save(data.permission, data.isAvailable);
        dispatch(socketActions.incoming.receivePermission(data.permission, data.isAvailable));
        break;
      case types.RECEIVE_SOUND:
        dispatch(socketActions.incoming.receiveSound(data));
        break;
      case types.PLAYER_CONNECTED:
        dispatch(socketActions.incoming.playerConnected(data.user));
        break;
      case types.PLAYER_UPDATED:
        dispatch(socketActions.incoming.playerUpdated(data.user));
        break;
      case types.RECEIVE_TUTORIAL_COMPLETE:
        dispatch(socketActions.incoming.tutorialComplete());
        break;
      default:
        break;
    }
  }

  return socket;
}

export default setupSocket;
