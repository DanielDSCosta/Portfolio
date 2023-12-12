import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul className="nav">
      <li><NavLink to="/">Accueil</NavLink></li>
      <li><NavLink to="/project">Projets</NavLink></li>
      <li><NavLink to="/about">About Me</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Header;