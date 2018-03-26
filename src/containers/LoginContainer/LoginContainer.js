// @flow

import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { LoginForm } from '../../components';

type P = {};

type S = {};

class LoginContainer extends PureComponent<P, S> {
  state = {};
  render() {
    return (
      <View>
        <LoginForm />
      </View>
    );
  }
}

export default LoginContainer;
