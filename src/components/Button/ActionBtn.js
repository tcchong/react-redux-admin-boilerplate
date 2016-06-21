import React, { PropTypes } from 'react';

const ActionBtn = ({ children, type, onClick }) => (
  <button className={`btn btn-${type}`} onClick={onClick}>
    {children}
  </button>
);

export default ActionBtn;

ActionBtn.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
