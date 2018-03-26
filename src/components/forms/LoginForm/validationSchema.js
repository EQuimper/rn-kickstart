// @flow

import yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(6, 'Not long enough')
    .required('Password is a required field'),
});
