// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { type StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type P = {
  children: React.Node,
  style?: StyleObj,
};

function CenterView({ style, children }: P) {
  return <View style={[styles.root, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CenterView;
