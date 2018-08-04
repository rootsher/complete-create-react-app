import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './home/home.route';
import NotFound from './not-found/not-found.route';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
  </Switch>
);
