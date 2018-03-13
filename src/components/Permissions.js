import React from 'react';
import PropTypes from 'prop-types';

const Permissions = ({ permissions, dispatch }) => (
  <div className="permissions">
    {Object.keys(permissions).map(key => (
      <p
        key={key}>
        {key}: {`${permissions[key]}`}

        <button
          onClick={() => {
            dispatch(key);
          }}
          >Show Permission</button>
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
