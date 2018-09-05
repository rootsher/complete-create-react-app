import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({
  isAuthenticated,
  children,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        Component ? (
          <Component {...props} />
        ) : (
          children
        )
      ) : (
        <Redirect
          to={{
            pathname: '/auth/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
