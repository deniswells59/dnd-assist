import * as types from '../constants/ActionTypes'

const initialState = {
  id: null,
  name: null,
  tutorialComplete: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return action.user;
    default:
      return state
  }
}

export default users
