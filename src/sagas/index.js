import axios from 'axios';
import { takeEvery, select, call, takeLatest, put, all } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

import storage from '../storage';

const getUrl = path => `http://localhost:3090/${path}`;
const getAuthUrl = path => `${getUrl(path)}?auth=${storage.user.getJWT()}`;

const getUserFromStore = state => state.user;

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = storage.user.get().name;
    params.socket.send(JSON.stringify(action));
  })
}

const handlePlayerConnect = function* handlePlayerConnect(params) {
  yield takeEvery(types.CONNECT_TO_SOCKET, (action) => {
    params.socket.send(JSON.stringify(action));
  })
}

const handleUnlockPermissions = function* handleUnlockPermissions(params) {
  yield takeEvery(types.UNLOCK_PERMISSION, (action) => {
    storage.permissions.save(action.permission);
    params.socket.send(JSON.stringify(action));
  })
}

const handleUnlockTutorial = function* handleUnlockTutorial(params) {
  yield takeEvery(types.UNLOCK_TUTORIAL_COMPLETE, (action) => {
    params.socket.send(JSON.stringify(action));
  })
}

const handleSoundPlay = function* handleSoundPlay(params) {
  yield takeEvery(types.PLAY_SOUND, (action) => {
    params.socket.send(JSON.stringify(action));
  })
}

const handlePlayerUpdate= function* handleSoundPlay(params) {
  yield takeEvery(types.UPDATE_USER_SUCCESS, (action) => {
    params.socket.send(JSON.stringify(action));
  })
}

const userLoginApi = data => {
  return axios.post(getUrl('signin'), data);
}

const userUpdateApi = data => {
  return axios.post(getAuthUrl('update'), data);
}

const userLoginAttempt = function* userLoginAttempt() {
  yield takeLatest(types.ATTEMPT_USER_LOGIN, function* login(action) {
    try {
      const { credentials } = action;
      const response = yield call(userLoginApi, credentials);
      const user = response.data;

      storage.user.save(user);

      yield put({ type: types.USER_LOGIN, user });
    } catch (e) {
      // TODO
    }
  })
}

const handleUserCheck = function* checkUser() {
  yield takeEvery(types.CHECK_USER, function* login() {
    const user = storage.user.get();

    yield put({ type: types.USER_LOGIN, user });
  })
}

const handleUserUpdate = function* userUpdate() {
  yield takeLatest(types.UPDATE_USER_ATTEMPT, function* updateUser(action) {
    try {
      const oldUser = yield select(getUserFromStore);
      const newUser = action.user;
      yield call(userUpdateApi, newUser);
      const user = {
        ...oldUser,
        ...newUser
      };

      storage.user.save(user);

      yield put({ type: types.UPDATE_USER_SUCCESS, user });
      yield put({ type: types.CHANGE_EDITTING_STATUS, isEditting: false, items: [] });
    } catch (e) {
      // TODO
    }
  })
}

const handleReceiveTutorial = function* receiveTutorial() {
  yield takeEvery(types.RECEIVE_TUTORIAL_COMPLETE, function* unlockTutorial() {
    try {
      const oldUser = yield select(getUserFromStore);

      const user = {
        ...oldUser,
        tutorialComplete: true,
      }

      yield call(userUpdateApi, user);
      storage.user.save(user);

      yield put({ type: types.UPDATE_USER_SUCCESS, user });
    } catch(e) {
      // TODO
    }
  })
}

export default function* rootSaga(params) {
  yield all([
    handleSoundPlay(params),
    handleNewMessage(params),
    handleUnlockPermissions(params),
    handlePlayerConnect(params),
    handlePlayerUpdate(params),
    handleUnlockTutorial(params),
    userLoginAttempt(),
    handleUserCheck(),
    handleUserUpdate(),
    handleReceiveTutorial(),
  ])
};
