import React from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import Home from './base/components/home/home.route';
import NotFound from './base/components/not-found/not-found.route';

export default () => (
  <div>
    <NavLink to="/">home</NavLink>
    <NavLink to="/not-found">not-found</NavLink>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
