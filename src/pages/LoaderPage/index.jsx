import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const LoaderPage = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/load/events">events</NavLink>
        </li>
        <li>
          <NavLink to="/load/phones">phones</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default LoaderPage;
