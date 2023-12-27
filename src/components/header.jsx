import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul className="nav">
      <li className="nav-item"><NavLink to="/">Accueil</NavLink></li>
      <li className="nav-item"><NavLink to="/project">Projets</NavLink></li>
      <li className="nav-item"><NavLink to="/about">About Me</NavLink></li>
      <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Header;