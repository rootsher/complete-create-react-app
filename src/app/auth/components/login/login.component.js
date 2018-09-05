import React, { Component } from 'react';
import { connect } from 'react-redux';

import login from '../../actions/login.action';
import Login from './login.template';

class LoginComponent extends Component {
  render() {
    return <Login onClick={() => this._onClick()} />;
  }

  _onClick() {
    this.props.login();
  }
}

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    login: () => dispatch(login())
  })
)(LoginComponent);
