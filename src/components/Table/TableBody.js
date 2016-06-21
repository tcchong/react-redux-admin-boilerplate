import React, { PropTypes } from 'react';

const TableBody = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

export default TableBody;

TableBody.propTypes = {
  children: PropTypes.node
};

