import React from '../../snowpack/pkg/react.js';
import PropTypes from '../../snowpack/pkg/prop-types.js';
import '../App.css.proxy.js';
function Button({
  className,
  onClickAction,
  buttonName
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: className,
    onClick: onClickAction
  }, /*#__PURE__*/React.createElement("h2", null, buttonName));
}
Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired
};
export default Button;