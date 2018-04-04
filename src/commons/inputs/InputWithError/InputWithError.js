// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Body } from '../../Typographie';

type P = {
  placeholder: string,
  value: string,
  onBlur: () => void,
  onChangeText: (text: string) => void,
  errorMessage: string,
  haveError: boolean,
};

function InputWithError({
  placeholder,
  value,
  onBlur,
  onChangeText,
  errorMessage,
  haveError,
  ...rest
}: P) {
  return (
    <View style={styles.root}>
      <TextInput
        {...rest}
        placeholder={placeholder}
        label={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {haveError && <Body style={styles.errorText}>{errorMessage}</Body>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    width: '90%',
    marginBottom: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 12
  },
});

export default InputWithError;
