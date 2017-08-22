import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CurrentUser from '../queries/CurrentUser';

class Header extends Component {

  renderButtons() {}

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
