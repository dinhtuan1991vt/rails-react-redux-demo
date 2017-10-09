import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as formReducer } from 'redux-form';
import auth, { AuthState } from './auth';

export interface RootState {
  auth: AuthState;
}

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  form: formReducer,
  auth
});