import React from 'react';

let Box = ({children, type, loading}) => {
  return(
    <div className={`box box-${type}`}>
      {children}
      {
        loading &&
          <div className="overlay">
            <i className="fa fa-refresh fa-spin"></i>
          </div>
      }
    </div>
    )
}

export default Box;
