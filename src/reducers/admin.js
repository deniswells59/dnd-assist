import * as types from '../constants/ActionTypes'

const initialState = {
  playerList: [],
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAYER_UPDATED:
    case types.PLAYER_CONNECTED:
      const newList = state.playerList.filter(player => {
        if(player._id !== action.user._id) return true;
        return false;
      });

      return {
        ...state,
        playerList: [
          ...newList,
          action.user,
        ],
      }
    default:
      return state
  }
}

export default admin;
