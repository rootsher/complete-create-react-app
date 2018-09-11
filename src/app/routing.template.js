import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';

import Login from './auth/components/login/login.route';
import Home from './base/components/home/home.route';
import NotFound from './base/components/not-found/not-found.route';
import ProtectedRoute from './core/components/protected-route/protected-route.route';
import ExampleList from './dummy/components/example-list/example-list.route';
import MenuComponent from './common/components/menu/menu.component';

export default () => (
  <Fragment>
    <Switch>
      <Route path="/auth/login" exact component={Login} />
      <ProtectedRoute path="/">
        <MenuComponent />
        <Route path="/" exact component={Home} />
        <Route path="/example/list" component={ExampleList} />
      </ProtectedRoute>
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);
