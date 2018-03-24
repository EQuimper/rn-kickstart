// @flow

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('../src/commons/stories');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

type P = {};

type S = {};

// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component<P, S> {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('rn_kickstart', () => StorybookUIHMRRoot);

export default StorybookUIHMRRoot;
