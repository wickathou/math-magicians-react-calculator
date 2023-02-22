import React from '../snowpack/pkg/react.js';
import './App.css.proxy.js';
import { Navigate, Route, Routes } from '../snowpack/pkg/react-router-dom.js';
import Home from './routes/Home.js';
import Calculator from './routes/Calculator.js';
import Layout from './components/Layout.js';
import Quote from './routes/Quote.js';
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Layout, null)
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/calc",
    element: /*#__PURE__*/React.createElement(Calculator, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/quote",
    element: /*#__PURE__*/React.createElement(Quote, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/*",
    element: /*#__PURE__*/React.createElement(Navigate, {
      to: "/",
      replace: true
    })
  }))));
}
export default App;