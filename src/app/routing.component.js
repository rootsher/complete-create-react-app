import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import logout from './auth/actions/logout.action';

import Routing from './routing.template';

class RoutingComponent extends Component {
  render() {
    const { session, logout } = this.props;

    return (
      <Routing isAuthenticated={session.isAuthenticated} logout={logout} />
    );
  }
}

export default withRouter(
  connect(
    state => ({
      session: state.session
    }),
    dispatch => ({
      logout: () => dispatch(logout())
    })
  )(RoutingComponent)
);
