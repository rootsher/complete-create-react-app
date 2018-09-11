import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import logout from '../../../auth/actions/logout.action';

import Menu from './menu.template';

class MenuComponent extends PureComponent {
  render() {
    const { session, logout } = this.props;

    return <Menu isAuthenticated={session.isAuthenticated} logout={logout} />;
  }
}

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(MenuComponent);
