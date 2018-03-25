// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { CenterView } from '../../';
import RoundedButton from './RoundedButton';

storiesOf('RoundedButton', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <RoundedButton variant="primary" onPress={action('clicked-text')}>
      Hello World
    </RoundedButton>
  ))
  .add('Disabled', () => (
    <RoundedButton disabled variant="primary" onPress={action('clicked-text')}>
      Hello World
    </RoundedButton>
  ))
  .add('Loading', () => (
    <RoundedButton
      loadingColor="#fff"
      loading
      variant="primary"
      onPress={action('clicked-text')}
    >
      Hello World
    </RoundedButton>
  ));
