import React from 'react';

let TableHead = ({children, tHead}) => {
  return (
    <thead>
      <tr role="row">
      {
        tHead.map((item, index) => <th key={index}>{item}</th>)
      }
      </tr>
    </thead>
    )
}

export default TableHead;