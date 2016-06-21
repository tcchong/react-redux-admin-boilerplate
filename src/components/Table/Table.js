import React, { PropTypes } from 'react';

const Table = ({ children }) => (
  <table className="table table-bordered table-hover" role="grid">
    {children}
  </table>
);

export default Table;

Table.propTypes = {
  children: PropTypes.node
};
