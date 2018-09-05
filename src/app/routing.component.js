import React from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import Login from './auth/components/login/login.route';
import Home from './base/components/home/home.route';
import NotFound from './base/components/not-found/not-found.route';
import ProtectedRoute from './core/components/protected-route/protected-route.route';
import ExampleList from './dummy/components/example-list/example-list.route';

export default () => (
  <div>
    <NavLink to="/">home</NavLink>
    <NavLink to="/auth/login">login</NavLink>
    <NavLink to="/other-example-list">other-example-list</NavLink>
    <NavLink to="/example-list">example-list</NavLink>
    <NavLink to="/not-found">not-found</NavLink>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/auth/login" exact component={Login} />
      <ProtectedRoute path="/example-list">
        <Route component={ExampleList} />
      </ProtectedRoute>
      <ProtectedRoute path="/other-example-list" component={ExampleList} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
