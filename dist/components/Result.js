import React from '../../snowpack/pkg/react.js';
import PropTypes from '../../snowpack/pkg/prop-types.js';
import '../App.css.proxy.js';
function Result({
  className,
  display
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("h2", null, display || 0));
}
Result.propTypes = {
  className: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired
};
export default Result;