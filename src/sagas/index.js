import { takeEvery, takeLatest, put, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { select } from 'redux-saga/effects';
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

const userLoginAttempt = function* userLoginAttempt(params) {
  yield takeLatest(types.ATTEMPT_USER_LOGIN, function* login(action) {
    try {
      let user = secondTimeUser;
      yield delay(500); // API CALL GOES HERE :)

      saveUserToLocalStorage(user);

      yield put({ type: types.USER_LOGIN, user });
    } catch (e) {
      // TODO
    }
  })
}

const handleUserCheck = function* checkUser() {
  yield takeEvery(types.CHECK_USER, function* login() {
    const data = getUserFromLocalStorage();
    const user = JSON.parse(data);

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
