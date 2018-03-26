// @flow

import React, { PureComponent } from 'react';
import { YellowBox } from 'react-native';

import Navigator from './screens/Navigator';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires main queue',
]);

type P = {};

type S = {};

class App extends PureComponent<P, S> {
  state = {};
  render() {
    return <Navigator />;
  }
}

export default App;
