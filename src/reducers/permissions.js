import * as types from '../constants/ActionTypes';
import storage from '../storage';

const initialState = {
  map: false,
  pictureBook: false,
  translator: false,
  ...storage.permissions.get(),
};

const permissions = (state = initialState, action) => {
  switch (action.type) {
    case types.REHYDRATE_PERMISSIONS:
      return {
        ...state,
        ...action.permissions,
      }
    case types.RECEIVE_PERMISSION:
    case types.UNLOCK_PERMISSION:
      return {
        ...state,
        [action.permission]: !state[action.permission],
      }
    default:
      return state;
  }
}

export default permissions;
