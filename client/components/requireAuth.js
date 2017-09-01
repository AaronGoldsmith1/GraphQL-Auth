import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentDidMount() {
      if (!this.props.data.user && !this.props.data.loading) {
        hashHistory.push('/login');
      }
    }

    render() {
      return (<WrappedComponent {...this.props}/>)
    }
  }

  return graphql(currentUserQuery)(RequireAuth);
};
