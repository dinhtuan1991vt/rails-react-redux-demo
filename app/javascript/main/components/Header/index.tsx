import { Component } from 'react';

export interface HeaderProps {
  logoutRequest: () => void;
  username: string;
}

export interface HeaderState {
  dropdownOpen: boolean;
}

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleLogout() {
    this.props.logoutRequest();
  }

  render() {
    return require('./index.rt').apply(this);
  }
}