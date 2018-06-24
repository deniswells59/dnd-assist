import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const Permissions = ({ permissions, dispatch }) => (
  <div>
    {Object.keys(permissions).map(key => (
      <button
        key={key}
        style={{
          backgroundColor: permissions[key] ? 'green' : 'red',
        }}
        onClick={() => {
          dispatch(key, !permissions[key]);
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

export default Dropdown(Permissions);
