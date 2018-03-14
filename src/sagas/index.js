import { takeEvery, takeLatest, put, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
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


const firstTimeUser = {
  id: '123',
  name: 'Skip Bo',
  tutorialComplete: false,
};

const secondTimerUser = {
  ...firstTimeUser,
  tutorialComplete: true
}

const userLoginAttempt = function* userLoginAttempt(credentials) {
  yield takeLatest(types.ATTEMPT_USER_LOGIN, function* login(action) {
    try {
      let user = firstTimeUser;
      yield delay(500); // API CALL GOES HERE :)
      window.localStorage.setItem('auth', JSON.stringify(user));
      yield put({ type:'USER_LOGIN', user });
    } catch (e) {
      // TODO
    }
  })
}


export default function* rootSaga(params) {
  yield all([
    handleSoundPlay(params),
    handleNewMessage(params),
    handleUnlockPermissions(params),
    userLoginAttempt(),
  ])
};
