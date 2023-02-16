import React, { useState } from 'react';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculate';
import keys from '../util/keys';
import '../App.css';

function Calculator() {
  const [calculation, setCalculation] = useState({ total: null, next: null, operation: null });

  function handleClick(buttonName) {
    const { total, next, operation } = calculate(calculation, buttonName);
    setCalculation({ total, next, operation });
  }

  return (
    <div className="calculator-style">
      <Result className="display-style" display={calculation.next ? calculation.next : calculation.total} />

      <Button className="reg-btn" buttonName={keys.ac} onClickAction={() => handleClick(keys.ac)} />
      <Button className="reg-btn" buttonName={keys.pm} onClickAction={() => handleClick(keys.pm)} />
      <Button className="reg-btn" buttonName={keys.perc} onClickAction={() => handleClick(keys.perc)} />
      <Button className="act-btn" buttonName={keys.div} onClickAction={() => handleClick(keys.div)} />

      <Button className="reg-btn" buttonName={keys.num7} onClickAction={() => handleClick(keys.num7)} />
      <Button className="reg-btn" buttonName={keys.num8} onClickAction={() => handleClick(keys.num8)} />
      <Button className="reg-btn" buttonName={keys.num9} onClickAction={() => handleClick(keys.num9)} />
      <Button className="act-btn" buttonName={keys.mul} onClickAction={() => handleClick(keys.mul)} />

      <Button className="reg-btn" buttonName={keys.num4} onClickAction={() => handleClick(keys.num4)} />
      <Button className="reg-btn" buttonName={keys.num5} onClickAction={() => handleClick(keys.num5)} />
      <Button className="reg-btn" buttonName={keys.num6} onClickAction={() => handleClick(keys.num6)} />
      <Button className="act-btn" buttonName={keys.subs} onClickAction={() => handleClick(keys.subs)} />

      <Button className="reg-btn" buttonName={keys.num1} onClickAction={() => handleClick(keys.num1)} />
      <Button className="reg-btn" buttonName={keys.num2} onClickAction={() => handleClick(keys.num2)} />
      <Button className="reg-btn" buttonName={keys.num3} onClickAction={() => handleClick(keys.num3)} />
      <Button className="act-btn" buttonName={keys.sum} onClickAction={() => handleClick(keys.sum)} />

      <Button className="wide-btn" buttonName={keys.num0} onClickAction={() => handleClick(keys.num0)} />
      <Button className="reg-btn" buttonName={keys.dot} onClickAction={() => handleClick(keys.dot)} />
      <Button className="act-btn" buttonName={keys.equal} onClickAction={() => handleClick(keys.equal)} />
    </div>
  );
}

export default Calculator;
