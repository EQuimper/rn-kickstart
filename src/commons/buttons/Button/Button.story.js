// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { CenterView } from '../../';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <Button variant="primary" onPress={action('clicked-text')}>
      Hello World
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled variant="primary" onPress={action('clicked-text')}>
      Hello World
    </Button>
  ))
  .add('Loading', () => (
    <Button
      loadingColor="#fff"
      loading
      variant="primary"
      onPress={action('clicked-text')}
    >
      Hello World
    </Button>
  ));
