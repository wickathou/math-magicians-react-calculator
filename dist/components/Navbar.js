import React from '../../snowpack/pkg/react.js';
import { Link } from '../../snowpack/pkg/react-router-dom.js';
function Navbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-indigo-500 w-full"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold"
  }, "Math Magicians"), /*#__PURE__*/React.createElement("ul", {
    className: "flex space-x-4"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/calc"
  }, "Calculator")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/quote"
  }, "Quote")))));
}
export default Navbar;