import React from 'react';

let ActionBtn = ({ children, type, onClick }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      { children }
    </button>
    )
}

export default ActionBtn;
