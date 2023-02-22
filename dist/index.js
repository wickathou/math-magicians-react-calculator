import React from '../snowpack/pkg/react.js';
import ReactDOM from '../snowpack/pkg/react-dom.js';
import { BrowserRouter } from '../snowpack/pkg/react-router-dom.js';
import App from './App.js';
import './index.css.proxy.js';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null))), document.getElementById('root'));