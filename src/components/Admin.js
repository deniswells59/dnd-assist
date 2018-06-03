import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import { SoundBoard } from '../containers/SoundBoard';


const Admin = ({ user, admin, dispatchSound }) => (
  <div>
    <p>Welcome {user.name}!</p>

    <div className="player-list">
      {admin.playerList.map((user, idx) => (
        <div
          key={idx}
          className="player-list-item">
          <Player
            cannotEdit
            user={user}
          />
          <button
            onClick={() => dispatchSound('lowhealth', user._id)}
            >Low Health</button>
        </div>
      ))}

      <SoundBoard />
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
