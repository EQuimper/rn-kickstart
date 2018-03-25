// @flow

import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';

type P = {};

type S = {};

class App extends PureComponent<P, S> {
  state = {};
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default App;
