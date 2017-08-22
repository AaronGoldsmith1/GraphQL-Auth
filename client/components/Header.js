import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CurrentUser from '../queries/CurrentUser';

class Header extends Component {

  renderButtons() {
    const {loading, user} = this.props.data;
    if (loading) {
      return <div />;
    }
    //query complete

  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderButtons()}
        </div>
      </nav>
      );
  }
}

export default graphql(query)(Header);
