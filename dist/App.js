import React from '../snowpack/pkg/react.js';
import './App.css.proxy.js';
import Calculator from './components/Calculator.js';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center h-screen"
  }, /*#__PURE__*/React.createElement(Calculator, null));
}
export default App;