import React, { PropTypes } from 'react';

const TableHead = ({ tHead }) => (
  <thead>
    <tr role="row">
    {
      tHead.map((item, index) => <th key={index}>{item}</th>)
    }
    </tr>
  </thead>
);

export default TableHead;

TableHead.propTypes = {
  tHead: PropTypes.array.isRequired
};
