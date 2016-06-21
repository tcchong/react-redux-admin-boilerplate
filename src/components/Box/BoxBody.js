import React, { PropTypes } from 'react';

const BoxBody = ({ children }) => (
  <div className="box-body">
    {children}
  </div>
);

export default BoxBody;

BoxBody.propTypes = {
  children: PropTypes.node
};
