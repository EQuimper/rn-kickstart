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
    <Button onPress={action('clicked-text')}>Hello World</Button>
  ));
