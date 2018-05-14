import * as types from '../constants/ActionTypes'

const initialState = {
  isEditting: false,
  items: [],
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_EDITTING_STATUS:
      return {
        ...state,
        isEditting: action.isEditting,
        items: action.items
      };
    default:
      return state
  }
}

export default player
