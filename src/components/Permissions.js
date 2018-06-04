import React from 'react';
import PropTypes from 'prop-types';

const Permissions = ({ permissions, dispatch }) => (
  <div id="permissions">
    {Object.keys(permissions).map(key => (
      <button
        key={key}
        onClick={() => {
          dispatch(key);
        }}
      >{key}</button>
    ))}
  </div>
);

Permissions.propTypes = {
  permissions: PropTypes.shape({
    map: PropTypes.bool.isRequired,
    pictureBook: PropTypes.bool.isRequired,
    translator: PropTypes.bool.isRequired,
  }),
};

export default Permissions;
