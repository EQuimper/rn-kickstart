// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { type StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { Body } from '../../Typographie';

type P = {
  placeholder: string,
  value: string,
  onBlur: (name: string) => void,
  onChangeText: (name: string, text: string) => void,
  name: string,
  touched: boolean,
  error: ?string,
  containerStyle?: StyleObj,
  inputStyle?: StyleObj,
};

class InputWithError extends PureComponent<P> {
  _handleChange = (value: string) => {
    this.props.onChangeText(this.props.name, value);
  };

  _handleBlur = () => {
    this.props.onBlur(this.props.name);
  };

  render() {
    const {
      placeholder,
      value,
      onBlur,
      onChangeText,
      touched,
      error,
      containerStyle,
      inputStyle,
      ...rest
    } = this.props;
    return (
      <View style={[styles.root, containerStyle]}>
        <TextInput
          {...rest}
          placeholder={placeholder}
          label={placeholder}
          value={value}
          onChangeText={this._handleChange}
          onBlur={this._handleBlur}
          style={[styles.input, inputStyle]}
        />
        {error && touched && <Body style={styles.errorText}>{error}</Body>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    width: '90%',
    marginBottom: 30,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'gray'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  input: {
    flex: 1
  }
});

export default InputWithError;
