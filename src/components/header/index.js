import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

import favorites from '../../assets/img/bookmark.svg';
import home from '../../assets/img/home.svg';
import history from '../../assets/img/history.svg';

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={home} alt="go home" />
      </NavLink>
      <div>
        <NavLink to="/history">
          <img src={history} alt="history" />
        </NavLink>
        <NavLink to="/favorit" className="link">
          <img src={favorites} className="icon-saved" alt="favorites" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
