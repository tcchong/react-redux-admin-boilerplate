import React, { PropTypes } from 'react';

const Navbar = ({ children }) => (
  <nav className="navbar navbar-static-top">
    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>
    {children}
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  children: PropTypes.node
};
