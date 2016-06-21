import React, { PropTypes } from 'react';

const Box = ({ children, type, loading }) => (
  <div className={`box box-${type}`}>
    {children}
    {
      loading &&
        <div className="overlay">
          <i className="fa fa-refresh fa-spin"></i>
        </div>
    }
  </div>
);

export default Box;

Box.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  loading: PropTypes.bool
};
