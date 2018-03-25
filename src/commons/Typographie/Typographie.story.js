// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { CenterView } from '../';
import { H1, H2, H3, H4, H5, PText, Text } from './Typographie'

storiesOf('H1', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <H1 yo="false">Hello World</H1>
  ));

storiesOf('H2', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <H2>Hello World</H2>
  ));

storiesOf('H3', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <H3>Hello World</H3>
  ));

storiesOf('H4', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <H4>Hello World</H4>
  ));

storiesOf('H5', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <H5>Hello World</H5>
  ));

storiesOf('PText', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <PText>Hello World</PText>
  ));

storiesOf('Text', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <Text>Hello World</Text>
  ));
