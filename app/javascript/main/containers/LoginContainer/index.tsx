import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm, { LoginFormData } from '../../components/LoginForm';
import { RootState } from '../../reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { loginRequest } from '../../actions/auth';

export interface LoginContainerProps {
  loginRequest: (username: string, password: string) => any;
}

export class LoginContainer extends Component<LoginContainerProps, {}> {
  onSubmit = (values: LoginFormData) => {
    this.props.loginRequest(values.username, values.password);
  }

  render() {
    return (
      <LoginForm onSubmit={this.onSubmit}/>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators(
  {
    loginRequest
  }, 
  dispatch
);

export default connect(null, mapDispatchToProps)(LoginContainer);