import React from 'react';
import '../App.css';

function Button({className, onClickAction, buttonName}) {
  return (
    <div className={className} onClick={onClickAction}>
      <h2>{buttonName}</h2>
    </div>
  );
}

export default Button;
