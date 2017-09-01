import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class RequireAuth extends Component {

  componentDidMount() {

    if (!this.props.data.user) {
      hashHistory.push('/login');
    }
  }


}

graphql(currentUserQuery)(RequireAuth);