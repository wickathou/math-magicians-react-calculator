import React, { useState } from 'react';
import '../App.css';

function Result({className, display}) {
  return (
    <div className={className}>
      <h2>{display ? display : 0}</h2>
    </div>
  );
}

export default Result;
