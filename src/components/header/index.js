import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

import favorites from '../../assets/img/bookmark.svg';

function Header() {
  return (
    <div className="header">
      <NavLink to="/favorite" className="link">
        <img src={favorites} className="icon-saved" alt="favorites" />
      </NavLink>
    </div>
  );
}

export default Header;
