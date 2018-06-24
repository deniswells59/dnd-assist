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
    const { openEditor, listItems, title, cannotEdit, customRender } = this.props;

    return (
      <div
        onClick={() => {
          if(cannotEdit) return;
          openEditor(listItems);
        }}
        className="player-info"
      >
        <div className="player-info-title">
          {title}
        </div>
        <ul className="player-info-list">
          {customRender ? customRender() : this.renderList()}
        </ul>
      </div>
    )
  }
}

export default PlayerInfo;
