const initialState = {
  twinkle: {
    playing: false,
  },
};

const sounds = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_SOUND':
    case 'RECEIVE_SOUND':
      return {
        ...state,
        [action.sound]: {
          ...state[action.sound],
          playing: true,
        },
      }
    default:
      return state;
  }
}

export default sounds;
