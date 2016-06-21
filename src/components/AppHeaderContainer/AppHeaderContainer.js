import React, { PropTypes } from 'react';

const AppHeaderContainer = ({ children }) => (
  <div className="main-header">
    {children}
  </div>
);

export default AppHeaderContainer;

AppHeaderContainer.propTypes = {
  children: PropTypes.node
};
