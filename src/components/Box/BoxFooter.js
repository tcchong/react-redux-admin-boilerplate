import React, { PropTypes } from 'react';

const BoxFooter = ({ children }) => (
  <div className="box-footer">
    {children}
  </div>
);

export default BoxFooter;

BoxFooter.propTypes = {
  children: PropTypes.node
};
