import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Result({ className, display }) {
  return (
    <div className={className}>
      <h2 role="dialog">{display || 0}</h2>
    </div>
  );
}

Result.defaultProps = {
  display: 0,
};

Result.propTypes = {
  className: PropTypes.string.isRequired,
  display: PropTypes.string,
};

export default Result;
