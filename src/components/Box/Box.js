import React from 'react';

let Box = ({children, type}) => {
  return(
    <div className={`box box-${type}`}>
      {children}
    </div>
    )
}

export default Box;
