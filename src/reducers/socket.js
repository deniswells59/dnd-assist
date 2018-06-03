import * as types from '../constants/ActionTypes'

const initialState = {
  open: false,
  connected: false,
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case types.SOCKET_OPEN:
      return {
        ...state,
        open: true,
      };
    case types.PLAYER_CONNECTED:
      return {
        ...state,
        connected: true,
      };
    default:
      return state
  }
}

export default socket
