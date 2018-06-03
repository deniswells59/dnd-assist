import * as types from '../constants/ActionTypes';

const initialState = {
  twinkle: {
    playerId: null,
    playing: false,
    src: 'twinkle.mp4'
  },
  secret: {
    playerId: null,
    playing: false,
    src: 'secret.wav'
  },
  lowhealth: {
    playerId: null,
    playing: false,
    src: 'lowhealth.wav'
  },
};

const sounds = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAY_SOUND:
    case types.RECEIVE_SOUND:
      return {
        ...state,
        [action.sound]: {
          ...state[action.sound],
          playerId: action.playerId || null,
          playing: true,
        },
      }
    case types.RESET_SOUND:
      return initialState;
    default:
      return state;
  }
}

export default sounds;
