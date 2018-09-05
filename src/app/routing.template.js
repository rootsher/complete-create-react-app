import React from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import Login from './auth/components/login/login.route';
import Home from './base/components/home/home.route';
import NotFound from './base/components/not-found/not-found.route';
import ProtectedRoute from './core/components/protected-route/protected-route.route';
import ExampleList from './dummy/components/example-list/example-list.route';

export default ({ isAuthenticated, logout }) => (
  <div>
    <NavLink to="/">[home]</NavLink>
    <NavLink to="/auth/login">[login]</NavLink>
    <NavLink to="/example-list">
      [<strong>protected</strong> example-list]
    </NavLink>
    <NavLink to="/not-found">[not-found]</NavLink>

    {isAuthenticated && <button onClick={logout}>logout</button>}

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/auth/login" exact component={Login} />
      <ProtectedRoute path="/example-list">
        <Route component={ExampleList} />
      </ProtectedRoute>
      <Route component={NotFound} />
    </Switch>
  </div>
);
