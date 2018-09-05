import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProtectedRoute from './protected-route.template';

class ProtectedRouteComponent extends Component {
  render() {
    const { session, ...rest } = this.props;

    return (
      <ProtectedRoute isAuthenticated={session.isAuthenticated} {...rest} />
    );
  }
}

export default connect((state, ownProps) => ({
  session: state.session,
  ...ownProps
}))(ProtectedRouteComponent);
