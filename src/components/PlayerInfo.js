import React, { Component } from 'react';

class PlayerInfo extends Component {
  renderList = () => {
    const { listItems } = this.props;
    const className = listItems.length > 1 ? 'player-info-item' : 'player-info-single';

    return this.props.listItems.map((item, i) => (
      <li key={i} className={className}>{item}</li>
    ))
  }

  render() {
    return (
      <div onClick={() => this.props.openEditor(this.props.listItems)} className="player-info">
        <div className="player-info-title">
          {this.props.title}
        </div>
        <ul className="player-info-list">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default PlayerInfo;
