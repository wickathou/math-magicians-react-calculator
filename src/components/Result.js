import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Result({ className, display }) {
  return (
    <div className={className}>
      <h2>{display || 0}</h2>
    </div>
  );
}

Result.propTypes = {
  className: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default Result;
