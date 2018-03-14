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
    params.socket.send(JSON.stringify(action));
  })
}

const handleSoundPlay = function* handleSoundPlay(params) {
  yield takeEvery(types.PLAY_SOUND, (action) => {
    params.socket.send(JSON.stringify(action));
  })
}

export default function* rootSaga(params) {
  yield all([
    handleSoundPlay(params),
    handleNewMessage(params),
    handleUnlockPermissions(params),
  ])
};
