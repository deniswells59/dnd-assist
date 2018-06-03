import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const Admin = ({ user, admin }) => (
  <div>
    <p>Welcome {user.name}!</p>

    <div className="player-list">
      {admin.playerList.map((user, idx) => (
        <div className="player-list-item">
          <Player
            key={idx}
            user={user}
          />
        </div>
      ))}
    </div>
  </div>
);

Admin.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  })
};

export default Admin;
