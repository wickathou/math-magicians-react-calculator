import React from 'react';
import '../App.css';

function Result({className, result}) {
  return (
    <div className={className}>
      <h2>{result}</h2>
    </div>
  );
}

export default Result;
