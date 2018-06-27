import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ToolList extends Component {
  state = {
    openTool: false,
  }

  openTool = () => {
    this.setState({
      openTool: true,
    });
  }

  closeTool = () => {
    this.setState({
      openTool: false,
    });
  }

  render() {
    const { permissions } = this.props;
    const permissionList = Object.keys(permissions);

    return (
      <div className="tool-list">
        {permissionList.map((p, i) => (
          <div
            key={i}
            className="tool-wrapper">
            <Link
              to={permissions[p] ? `/${p}` : ''}
            >
              {permissions[p] ? <p>{p}</p> : <p>????????</p>}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ToolList
