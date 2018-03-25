// @flow

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import Touchable from '@appandflow/touchable';
import { type StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type P = {
  style?: StyleObj,
  onPress: () => void,
  children: React.Node,
};

function Button({ style, onPress, children }: P) {
  return (
    <Touchable
      style={[styles.root, style]}
      onPress={onPress}
      feedback="opacity"
    >
      <Text>{children}</Text>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: '100%',
    borderRadius: 6,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
  },
});

export default Button;
