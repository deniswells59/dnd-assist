import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ openMenu, closeMenu, menuOpen }) => (
  <div className="menu">
    {menuOpen && (
      <div>
      <Link to="/tools">
        <img
          className="menu-img sub item-icon"
          src="/items_icon.png"
          alt="items-button"
        />
      </Link>
      <Link to="/chat">
        <img
          className="menu-img sub chat-icon"
          src="/chat_icon.png"
          alt="chat-button"
        />
      </Link>
    </div>
    )}
    <img
      className="menu-img"
      onClick={() => menuOpen ? closeMenu() : openMenu()}
      src="/menu_icon.png"
      alt="menu-button"
    />
  </div>
);

export default Menu;
