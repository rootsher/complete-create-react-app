import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default ({ isAuthenticated, logout }) => (
  <Fragment>
    <NavLink to="/">[home]</NavLink>
    <NavLink to="/example/list">
      [<strong>protected</strong> example-list]
    </NavLink>

    {isAuthenticated && <button onClick={logout}>logout</button>}
  </Fragment>
);
