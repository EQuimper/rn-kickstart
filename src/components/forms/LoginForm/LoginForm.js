// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import { validationSchema } from './validationSchema';
import { InputWithError } from '../../../commons';

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
            <InputWithError
              name="email"
              style={styles.input}
              placeholder="Email"
              value={values.email}
              onChangeText={setFieldValue}
              onBlur={setFieldTouched}
              touched={touched.email}
              error={errors.email}
              keyboardType="email-address"
            />
            <InputWithError
              name="password"
              style={styles.input}
              placeholder="Password"
              value={values.password}
              onChangeText={setFieldValue}
              onBlur={setFieldTouched}
              touched={touched.password}
              error={errors.password}
              secureTextEntry
            />
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
  input: {
    flex: 1,
  },
});

export default LoginForm;
