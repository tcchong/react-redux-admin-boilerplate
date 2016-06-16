import React from 'react';

let Navbar = ({children}) => {
  return (
    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      {children}
    </nav>
    )
}

export default Navbar;