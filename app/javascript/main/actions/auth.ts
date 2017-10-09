import { LOGIN_SUCCESS, LOGOUT } from '../constants/auth';
import { push } from 'react-router-redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthState } from '../reducers/auth';

export interface LoginSuccess {
  type: LOGIN_SUCCESS;
  payload: AuthState;
}

export interface Logout {
  type: LOGOUT;
}

export type AuthAction = LoginSuccess | Logout;

export const loginRequest = (username: string, password: string): ThunkAction<void, AuthState, void> => {
  return (dispatch: Dispatch<AuthState>) => {
    dispatch(showLoading());
    setTimeout(
      () => {
        dispatch(loginSuccess({username: username}));
        dispatch(hideLoading());
        dispatch(push('/'));
      }, 
      1000
    );
  };
};

export const loginSuccess = (auth: AuthState): LoginSuccess => {
  return {
    type: LOGIN_SUCCESS,
    payload: auth
  };
};

export const logoutRequest = (): ThunkAction<void, AuthState, void> => {
  return (dispatch: Dispatch<AuthState>) => {
    dispatch(logout());
    dispatch(push('/login'));
  };
};

export const logout = (): Logout => {
  return {
    type: LOGOUT
  };
};