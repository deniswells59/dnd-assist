import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action));
  })
}

const handleUnlockPermissions = function* handleUnlockPermissions(params) {
  yield takeEvery(types.UNLOCK_PERMISSION, (action) => {
    console.log('UNLOCK SAGA');
    params.socket.send(JSON.stringify(action));
  })
}

export default function* rootSaga(params) {
  yield all([
    handleNewMessage(params),
    handleUnlockPermissions(params),
  ])
};
