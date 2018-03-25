// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { CenterView } from '../';
import { Title, SubTitle, Callout, HeadLine, Body } from './Typographie';

storiesOf('Title', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => <Title>Hello World</Title>);

storiesOf('SubTitle', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => <SubTitle>Hello World</SubTitle>);

storiesOf('Callout', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => <Callout>Hello World</Callout>);

storiesOf('HeadLine', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => <HeadLine>Hello World</HeadLine>);

storiesOf('Body', module)
  .addDecorator(getStory => (
    <CenterView style={{ paddingHorizontal: 20 }}>{getStory()}</CenterView>
  ))
  .add('Default', () => <Body>Hello World</Body>);
