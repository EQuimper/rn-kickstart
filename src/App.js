// @flow

import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { CenterView, Title } from './commons';

import { buildNumber, isEmulator, appName } from './utils';

type P = {};

type S = {};

class App extends PureComponent<P, S> {
  state = {};
  render() {
    return (
      <CenterView>
        <Title>App Name: {appName}</Title>
        <Text>Build Number: {buildNumber}</Text>
        <Text>Emulator?: {String(isEmulator)}</Text>
      </CenterView>
    );
  }
}

export default App;
