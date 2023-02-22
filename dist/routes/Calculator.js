import React, { useState } from '../../snowpack/pkg/react.js';
import Button from '../components/Button.js';
import Result from '../components/Result.js';
import calculate from '../logic/calculate.js';
import keys from '../util/keys.js';
import '../App.css.proxy.js';
function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null
  });
  function handleClick(buttonName) {
    const {
      total,
      next,
      operation
    } = calculate(calculation, buttonName);
    setCalculation({
      total,
      next,
      operation
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "calculator-style"
  }, /*#__PURE__*/React.createElement(Result, {
    className: "display-style",
    display: calculation.next ? calculation.next : calculation.total
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.ac,
    onClickAction: () => handleClick(keys.ac)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.pm,
    onClickAction: () => handleClick(keys.pm)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.perc,
    onClickAction: () => handleClick(keys.perc)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "act-btn",
    buttonName: keys.div,
    onClickAction: () => handleClick(keys.div)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num7,
    onClickAction: () => handleClick(keys.num7)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num8,
    onClickAction: () => handleClick(keys.num8)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num9,
    onClickAction: () => handleClick(keys.num9)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "act-btn",
    buttonName: keys.mul,
    onClickAction: () => handleClick(keys.mul)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num4,
    onClickAction: () => handleClick(keys.num4)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num5,
    onClickAction: () => handleClick(keys.num5)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num6,
    onClickAction: () => handleClick(keys.num6)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "act-btn",
    buttonName: keys.subs,
    onClickAction: () => handleClick(keys.subs)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num1,
    onClickAction: () => handleClick(keys.num1)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num2,
    onClickAction: () => handleClick(keys.num2)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.num3,
    onClickAction: () => handleClick(keys.num3)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "act-btn",
    buttonName: keys.sum,
    onClickAction: () => handleClick(keys.sum)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "wide-btn",
    buttonName: keys.num0,
    onClickAction: () => handleClick(keys.num0)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "reg-btn",
    buttonName: keys.dot,
    onClickAction: () => handleClick(keys.dot)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "act-btn",
    buttonName: keys.equal,
    onClickAction: () => handleClick(keys.equal)
  }));
}
export default Calculator;