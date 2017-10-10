import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import AppContainer from './containers/AppContainer';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/CoreUI.css';
import './styles/spinner.css';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
})

