import React from 'react';
import PropTypes from 'prop-types';

const Admin = ({ user }) => (
  <div>
    <p>Welcome {user.name}!</p>
  </div>
);

Admin.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  })
};

export default Admin;
