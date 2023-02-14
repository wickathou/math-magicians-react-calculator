import React from 'react';
import '../App.css';

function Button(prop) {
  return (
    <div className={prop.className}>
      <h2>{prop.identifier}</h2>
    </div>
  );
}

export default Button;