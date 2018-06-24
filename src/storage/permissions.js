const getPermissionsFromLocalStorage = () => JSON.parse(window.localStorage.getItem('permissions')) || {};

const savePermissionToLocalStorage = (changedPermission, isAvailable) => {
  const current = getPermissionsFromLocalStorage();
  const newPermissions =  {
    ...current,
    [changedPermission]: isAvailable,
  };

  window.localStorage.setItem('permissions', JSON.stringify(newPermissions));
};

export default {
  get: getPermissionsFromLocalStorage,
  save: savePermissionToLocalStorage,
};
