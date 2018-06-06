const saveUserToLocalStorage = (user) => {
  window.localStorage.setItem('auth', JSON.stringify(user));
};

const getUserFromLocalStorage = () => JSON.parse(window.localStorage.getItem('auth'));
const getJWTFromLocalStorage = () => JSON.parse(window.localStorage.getItem('auth')).jwt;

export default {
  get: getUserFromLocalStorage,
  getJWT: getJWTFromLocalStorage,
  save: saveUserToLocalStorage,
};
