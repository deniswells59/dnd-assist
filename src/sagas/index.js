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
  traits: ['Human', 'Rogue', 'Chick Magnet'],
  hitPoints: ['12/24'],
  expPoints: ['3000'],
};

const secondTimeUser = {
  ...firstTimeUser,
  tutorialComplete: true
}

const userLoginAttempt = function* userLoginAttempt(credentials) {
  yield takeLatest(types.ATTEMPT_USER_LOGIN, function* login(action) {
    try {
      let user = secondTimeUser;
      yield delay(500); // API CALL GOES HERE :)
      window.localStorage.setItem('auth', JSON.stringify(user));
      yield put({ type:'USER_LOGIN', user });
    } catch (e) {
      // TODO
    }
  })
}

const handleUserCheck = function* checkUser() {
  yield takeEvery(types.CHECK_USER, function* login() {
    const data = window.localStorage.getItem('auth');
    const user = JSON.parse(data);

    yield put({ type:'USER_LOGIN', user });
  })
}

export default function* rootSaga(params) {
  yield all([
    handleSoundPlay(params),
    handleNewMessage(params),
    handleUnlockPermissions(params),
    userLoginAttempt(),
    handleUserCheck()
  ])
};
