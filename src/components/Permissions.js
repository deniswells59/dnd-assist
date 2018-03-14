import React from 'react';
import PropTypes from 'prop-types';

const Permissions = ({ permissions, dispatch }) => (
  <div id="permissions">
    {Object.keys(permissions).map(key => (
      <p
        key={key}>
        {key}:
        {permissions[key] ?
        <img width='250px' height='auto' src='/map.png' alt=""/> :
        `${permissions[key]}`
      }
      <button
        onClick={() => {
          dispatch(key);
        }}
        >Show Map</button>
    </p>
  ))}
  </div>
);

Permissions.propTypes = {
  permissions: PropTypes.shape({
    map: PropTypes.bool.isRequired,
  }),
};

export default Permissions;
