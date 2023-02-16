import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Button({ className, onClickAction, buttonName }) {
  return (
    <button className={className} onClick={onClickAction}>
      <h2>{buttonName}</h2>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Button;
