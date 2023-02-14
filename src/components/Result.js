import React from 'react';
import '../App.css';

function Result(prop) {
  return (
    <div className={prop.className}>
      <h2>{prop.result}</h2>
    </div>
  );
}

export default Result;