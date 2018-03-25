// @flow

import React from 'react';
import { Text as RnText, StyleSheet } from 'react-native';
import { type StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { theme } from '../../utils';

type P = {
  style?: StyleObj,
};

export const Title = ({ style, ...rest }: P) => (
  <RnText style={[styles.title, style]} {...rest} />
);

export const SubTitle = ({ style, ...rest }: P) => (
  <RnText style={[styles.subtitle, style]} {...rest} />
);

export const HeadLine = ({ style, ...rest }: P) => (
  <RnText style={[styles.headLine, style]} {...rest} />
);

export const Body = ({ style, ...rest }: P) => (
  <RnText style={[styles.body, style]} {...rest} />
);

export const Callout = ({ style, ...rest }: P) => (
  <RnText style={[styles.callout, style]} {...rest} />
);

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: theme.colors.text.dark,
    letterSpacing: 0.35,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text.dark,
    letterSpacing: 0.35,
  },
  headLine: {
    fontSize: 22,
    fontWeight: '400',
    color: theme.colors.text.dark,
  },
  body: {
    fontSize: 14,
    fontWeight: '300',
    color: theme.colors.text.dark,
  },
  callout: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.text.dark,
  },
});
