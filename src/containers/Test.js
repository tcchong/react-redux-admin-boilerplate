import React from 'react';
import { Link } from 'react-router';

export default class Test extends React.Component {

  render() {
    return (
      <div>
        Test page
        <Link to="/">
          Test
        </Link>
      </div>
      )
  }

}
