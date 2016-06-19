import React from 'react';

let Table = ({children}) => {
  return (
    <table className="table table-bordered table-hover" role="grid">
      {children}
    </table>
    )
}

export default Table;