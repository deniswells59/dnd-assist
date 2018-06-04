import * as types from '../constants/ActionTypes';

const initialState = {
  map: true,
  pictureBook: false,
  translator: false,
};

const permissions = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_PERMISSION:
    case types.UNLOCK_PERMISSION:
      return {
        ...state,
        [action.permission]: true,
      }
    default:
      return state;
  }
}

export default permissions;
