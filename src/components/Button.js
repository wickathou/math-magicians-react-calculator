import React from 'react';
import '../App.css';

function Button({className, identifier}) {
  return (
    <div className={className}>
      <h2>{identifier}</h2>
    </div>
  );
}

export default Button;
