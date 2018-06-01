import axios from 'axios';
import { takeEvery, select, call, takeLatest, put, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as types from '../constants/ActionTypes';

const getUserFromStore = state => state.user;

const saveUserToLocalStorage = (user) => {
  window.localStorage.setItem('auth', JSON.stringify(user));
};

const getUserFromLocalStorage = () => JSON.parse(window.localStorage.getItem('auth'));

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = getUserFromLocalStorage().name;
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

const userLoginApi = data => {
  return axios.post('http://localhost:3090/signin', data);
}

const userLoginAttempt = function* userLoginAttempt() {
  yield takeLatest(types.ATTEMPT_USER_LOGIN, function* login(action) {
    try {
      const { credentials } = action;
      const response = yield call(userLoginApi, credentials);
      const user = response.data;
      
      saveUserToLocalStorage(user);

      yield put({ type: types.USER_LOGIN, user });
    } catch (e) {
      // TODO
    }
  })
}

const handleUserCheck = function* checkUser() {
  yield takeEvery(types.CHECK_USER, function* login() {
    const user = getUserFromLocalStorage();

    yield put({ type: types.USER_LOGIN, user });
  })
}

const handleUserUpdate = function* userUpdate() {
  yield takeLatest(types.UPDATE_USER_ATTEMPT, function* updateUser(action) {
    try {
      const oldUser = yield select(getUserFromStore);
      const newUser = action.user;
      yield delay(500); // API CALL GOES HERE :)
      const user = {
        ...oldUser,
        ...newUser
      };

      saveUserToLocalStorage(user);

      yield put({ type: types.UPDATE_USER_SUCCESS, user });
      yield put({ type: types.CHANGE_EDITTING_STATUS, isEditting: false, items: [] });
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
    handleUserCheck(),
    handleUserUpdate(),
  ])
};
