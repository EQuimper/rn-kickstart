// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from './Button';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
});

storiesOf('Button', module).add('Default', () => (
  <View style={styles.root}>
    <Button onPress={action('clicked-text')}>Hello World</Button>
  </View>
));
