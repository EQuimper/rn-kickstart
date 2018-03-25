// @flow

import React from 'react';
import { Text as RnText, StyleSheet, TextProperties } from 'react-native';
import { type StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { theme } from '../../utils';

type P = {
  style?: StyleObj,
  ...$Exact<TextProperties>
};

export const H1 = ({ style, ...rest }: P) => (
  <RnText style={[styles.h1, style]} {...rest} />
);

export const H2 = ({ style, ...rest }: P) => (
  <RnText style={[styles.h2, style]} {...rest} />
);

export const H3 = ({ style, ...rest }: P) => (
  <RnText style={[styles.h3, style]} {...rest} />
);

export const H4 = ({ style, ...rest }: P) => (
  <RnText style={[styles.h4, style]} {...rest} />
);

export const H5 = ({ style, ...rest }: P) => (
  <RnText style={[styles.h5, style]} {...rest} />
);

export const PText = ({ style, ...rest }: P) => (
  <RnText style={[styles.pText, style]} {...rest} />
);

export const Text = ({ style, ...rest }: P) => (
  <RnText style={[styles.text, style]} {...rest} />
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: '600',
    color: theme.colors.text.dark,
    letterSpacing: 0.35,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text.dark,
    letterSpacing: 0.35,
  },
  h3: {
    fontSize: 22,
    fontWeight: '400',
    color: theme.colors.text.dark,
  },
  h4: {
    fontSize: 20,
    fontWeight: '400',
    color: theme.colors.text.dark,
  },
  h5: {
    fontSize: 18,
    fontWeight: '400',
    color: theme.colors.text.dark,
  },
  pText: {
    fontSize: 14,
    fontWeight: '300',
    color: theme.colors.text.dark,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.text.dark,
  },
});
