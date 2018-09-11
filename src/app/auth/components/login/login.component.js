//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type BrowserHistory from 'history/createBrowserHistory';
import type BrowserLocation from 'history/createBrowserHistory';
import type { Dispatch } from 'redux';

import login, { AUTH_LOGIN } from '../../actions/login.action';
import Login from './login.template';

type Props = {
  history: BrowserHistory,
  location: BrowserLocation,
  login(): any //dispatch
};

class LoginComponent extends Component<Props, null> {
  static defaultProps = {};

  render() {
    return <Login onClick={() => this._onClick()} />;
  }

  _onClick() {
    const { history, location } = this.props;

    this.props.login();

    if (location.state && location.state.from) {
      history.push(location.state.from.pathname);
    } else {
      history.push('/');
    }
  }
}

const mapStateToProps = (state: any): any => ({
  session: state.session
});

const mapDispatchToProps = (dispatch: Dispatch<{ type: AUTH_LOGIN }>) => ({
  login: () => dispatch(login())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
