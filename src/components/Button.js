import React from 'react';
import '../App.css';

function Button(prop) {
  const { className } = prop;
  const { identifier } = prop;
  return (
    <div className={className}>
      <h2>{identifier}</h2>
    </div>
  );
}

export default Button;
