const initialState = {
  map: false,
};

const permissions = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PERMISSION':
    case 'UNLOCK_PERMISSION':
      console.log('UNLOCK REDUCER!');
      return {
        ...state,
        [action.permission]: true,
      }
    default:
      return state;
  }
}

export default permissions;
