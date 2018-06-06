const getPermissionsFromLocalStorage = () => JSON.parse(window.localStorage.getItem('permissions')) || {};

const savePermissionToLocalStorage = (changedPermission) => {
  const current = getPermissionsFromLocalStorage();
  const newPermissions =  {
    ...current,
    [changedPermission]: !current[changedPermission],
  };

  window.localStorage.setItem('permissions', JSON.stringify(newPermissions));
};

export default {
  get: getPermissionsFromLocalStorage,
  save: savePermissionToLocalStorage,
};
