import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Translator from './Translator';
import { SoundBoard } from '../containers/SoundBoard';
import { Permissions } from '../containers/Permissions';
// import { Timer } from '../containers/Timer';
import { Reconnect } from '../containers/Reconnect';

const Admin = ({ user, admin, dispatchSound }) => (
  <div className="admin">
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

      <SoundBoard
        cssId="soundboard"
        name="Sounds"
      />
      <Permissions
        cssId="permissions"
        name="Permissions"
      />
      <Translator
        cssId="translator"
        name="Translator"
      />

      <Reconnect />
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
