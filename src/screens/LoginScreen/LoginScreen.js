// @flow

import React, { PureComponent, Fragment } from 'react';
import { type NavigationScreenProp } from 'react-navigation';

import { LoginContainer } from '../../containers';

type P = {|
  navigation: NavigationScreenProp<*>,
|};

type S = {};

class LoginScreen extends PureComponent<P, S> {
  state = {};
  render() {
    return (
      <Fragment>
        <LoginContainer />
      </Fragment>
    );
  }
}

export default LoginScreen;
