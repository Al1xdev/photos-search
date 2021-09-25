import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

import favorites from '../../assets/img/heart.svg';
import home from '../../assets/img/logo.svg';
import history from '../../assets/img/history.svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-wrapper">
          <NavLink to="/">
            <img src={home} alt="home" />
            <span className="logo-title">ImageStock</span>
          </NavLink>
          <div>
            <NavLink to="/history">
              <img src={history} alt="history" />
              <span className="link-title">История поиска</span>
            </NavLink>
            <NavLink to="/favorit" className="link">
              <img src={favorites} className="icon-saved" alt="favorites" />
              <span className="link-title">Избранное</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
