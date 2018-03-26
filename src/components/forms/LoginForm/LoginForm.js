// @flow

import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';

import { validationSchema } from './validationSchema';

type LoginFormValuesType = {|
  email: string,
  password: string,
|};

type P = {};

type S = {};

class LoginForm extends Component<P, S> {
  state = {};

  _handleSubmit = (values: LoginFormValuesType) => {};
  render() {
    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={this._handleSubmit}
        render={({
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
        }) => (
          <View style={styles.root}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={values.email}
                onChangeText={text => setFieldValue('email', text)}
                onBlur={() => setFieldTouched('email')}
              />
              {errors.email &&
                touched.email && (
                  <Text style={{ color: 'red' }}>{errors.email}</Text>
                )}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={values.password}
                onChangeText={text => setFieldValue('password', text)}
                onBlur={() => setFieldTouched('password')}
              />
              {errors.password &&
                touched.password && (
                  <Text style={{ color: 'red' }}>{errors.password}</Text>
                )}
            </View>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  inputWrapper: {
    height: 50,
    width: '90%',
    borderColor: 'red',
    borderWidth: 2,
  },
  input: {
    flex: 1,
  },
});

export default LoginForm;
