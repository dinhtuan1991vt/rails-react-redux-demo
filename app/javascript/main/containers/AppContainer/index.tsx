import * as React from 'react';
import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import LoginContainer from '../LoginContainer';
import MainContainer from '../../containers/MainContainer';

export default class AppContainer extends Component<{}, {}> {
  render() {
    return (
      <div>
        <LoadingBar className="loading" />
        <Switch>
          <Route exact={true} path="/admin/login" component={LoginContainer}/>
          <Route path="/admin" component={MainContainer}/>
          <Redirect from="/" exact={true} to="/admin"/>
        </Switch>
      </div>
    );
  }
}