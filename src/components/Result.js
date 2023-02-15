import React from 'react';
import '../App.css';

function Result(prop) {
  const { className } = prop;
  const { result } = prop;
  return (
    <div className={className}>
      <h2>{result}</h2>
    </div>
  );
}

export default Result;
