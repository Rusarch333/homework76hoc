import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
    <ul>
      <li><NavLink to='/'>home</NavLink></li>
      <li><NavLink to='/users'>users</NavLink></li>
      <li><NavLink to='/sign-in'>sign-in</NavLink></li>
      <li><NavLink to='/load'>load</NavLink></li>
    </ul>
  </nav>
  );
}

export default Menu;
