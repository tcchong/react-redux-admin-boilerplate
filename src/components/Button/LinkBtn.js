import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LinkBtn = ({ children, type, path }) => (
  <Link to={path}>
    <button className={`btn btn-${type}`}>
      {children}
    </button>
  </Link>
);

export default LinkBtn;

LinkBtn.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
