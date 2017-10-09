import * as React from 'react';
import { Component } from 'react';
import { InjectedFormProps, reduxForm, FormErrors } from 'redux-form';

export interface LoginFormData {
  username: string;
  password: string;
}

type LoginFormProps = InjectedFormProps<LoginFormData>;

const validate = (values: LoginFormData) => {
  const { username, password } = values;
  const errors: FormErrors<LoginFormData> = {};

  if (!username) {
    errors.username = 'Please enter username';
  }

  if (!password) {
    errors.password = 'Please enter password';
  }

  return errors;
};

export const renderField = (field: any) => {
  const hasError = !!field.meta.error && !!field.meta.touched;
  return (
    <div>
      <input {...field.input} type={field.type} placeholder={field.placeholder} className="form-control"/>
      {hasError && <span className="help-block">{field.meta.error}</span>}
    </div>
  );
};

class LoginForm extends Component<LoginFormProps, {}> {
  render() {
    return require('./index.rt').apply(this);
  }
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);