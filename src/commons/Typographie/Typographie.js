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
    color: theme.colors.text.dark,
    letterSpacing: 0.35,
    fontFamily: theme.fonts.bold
  },
  subtitle: {
    fontSize: 24,
    color: theme.colors.text.dark,
    letterSpacing: 0.35,
    fontFamily: theme.fonts.bold
  },
  headLine: {
    fontSize: 22,
    color: theme.colors.text.dark,
    fontFamily: theme.fonts.semiBold
  },
  body: {
    fontSize: 14,
    color: theme.colors.text.dark,
    fontFamily: theme.fonts.normal
  },
  callout: {
    fontSize: 16,
    color: theme.colors.text.dark,
    fontFamily: theme.fonts.normal
  },
});
