// @flow

import * as React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Touchable from '@appandflow/touchable';
import { type StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import Color from 'color';
import invariant from 'invariant';

import { theme } from '../../../utils';
import { Callout } from '../../Typographie';

type P = {|
  style?: StyleObj,
  textStyle?: StyleObj,
  onPress: () => void,
  children: React.Node,
  disabled?: boolean,
  loading?: boolean,
  variant?: 'primary' | 'secondary',
  color?: string,
  loadingColor?: string,
|};

function RoundedButton({
  style,
  onPress,
  children,
  disabled = false,
  loading = false,
  variant,
  color,
  loadingColor,
  textStyle,
  ...rest
}: P) {
  const colorNotProvided = !color && !variant;

  invariant(
    !colorNotProvided,
    'RoundedButton: You must provided at least one of variant or color',
  );

  const isDisabled = disabled || loading;

  const _color = Color(variant ? theme.colors[variant] : color);

  const backgroundColor = isDisabled ? _color.lighten(0.5) : _color;

  return (
    <Touchable
      {...rest}
      style={[styles.root, { backgroundColor }, style]}
      onPress={onPress}
      feedback="opacity"
      disabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator color={loadingColor} size="small" />
      ) : (
        <Callout style={[styles.text, textStyle]}>{children}</Callout>
      )}
    </Touchable>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: '100%',
    borderRadius: theme.metrics.radius.smallSize,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.metrics.shadow.basic,
  },
  text: {
    color: theme.colors.white,
  },
});

export default RoundedButton;
