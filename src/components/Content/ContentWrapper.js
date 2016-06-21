import React, { PropTypes } from 'react';

const ContentWrapper = ({ children }) => (
  <div className="content-wrapper">
    {children}
  </div>
);

export default ContentWrapper;

ContentWrapper.propTypes = {
  children: PropTypes.node
};
