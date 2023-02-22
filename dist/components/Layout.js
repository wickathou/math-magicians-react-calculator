import React from '../../snowpack/pkg/react.js';
import { Outlet } from '../../snowpack/pkg/react-router-dom.js';
import Navbar from './Navbar.js';
function Layout() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement(Outlet, null)));
}
export default Layout;