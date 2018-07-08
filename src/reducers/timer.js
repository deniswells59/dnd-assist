import * as types from '../constants/ActionTypes'

const initialState = {
  total: 0,
  splits: [
    {
      name: '',
      total: 0,
    }
  ],
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TIMER:
      console.log(action);
      return {
        ...state,
        ...action.timer,
      };
    default:
      return state
  }
}

export default timer;
