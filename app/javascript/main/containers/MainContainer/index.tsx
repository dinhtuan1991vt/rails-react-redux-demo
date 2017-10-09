import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/auth';
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from '../../reducers';
import { Container } from 'reactstrap';
import Header from '../../components/Header';

export interface MainContainerProps {
  logoutRequest: () => any;
  username: string;
}

export class MainContainer extends Component<MainContainerProps, {}> {
  render() {
    return (
      <div className="app">
        <Header username={this.props.username} logoutRequest={this.props.logoutRequest} />
        <div className="app-body">
          <main className="main">
            <Container fluid={true} />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    username: state.auth.username
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators(
  {
    logoutRequest
  }, 
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);