import { LOGIN_SUCCESS, LOGOUT } from '../constants/auth';
import { AuthAction } from '../actions/auth';

export interface AuthState {
  username?: string;
  isAuthenticated?: boolean;
}

const initialState: AuthState = {
  username: '',
  isAuthenticated: false
};

export default (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        username: action.payload.username,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        username: '',
        isAuthenticated: false
      };
    default:
      return state;
  }
};
