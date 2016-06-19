import React from 'react';
import { Link } from 'react-router';

let LinkBtn = ({ children, type, path }) => {
  return (
    <Link to={path}>
      <button className={`btn btn-${type}`}>
        { children }
      </button>
    </Link>
    )
}

export default LinkBtn;
