import React, { PropTypes } from 'react';

const BoxHeader = ({ children }) => (
  <div className="box-header">
    {children}
  </div>
);

export default BoxHeader;

BoxHeader.propTypes = {
  children: PropTypes.node
};
