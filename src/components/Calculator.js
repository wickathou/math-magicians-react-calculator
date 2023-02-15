import React, { useState } from 'react';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculate';
import '../App.css';

function Calculator() {
  const [calculation, setCalculation] = useState({total:null , next:null, operation: null})

  const regularButton = 'box-border border-2 border-neutral-400 col-span-1 bg-indigo-500 flex justify-center items-center';
  const wideButton = 'box-border border-2 border-neutral-400 col-span-2 bg-indigo-500 flex justify-center items-center';
  const display = 'box-border border-2 border-neutral-400 col-span-4 bg-indigo-500 flex justify-center items-center text-white';
  const actionColor = 'bg-orange-500';
  const numberColor = 'bg-stone-200';
  const displayColor = 'bg-neutral-800';
  const calculatorStyle = 'grid grid-cols-4 w-80 h-80 box-border border-4 border-neutral-400';

  function handleClick(buttonName) {
    console.log(buttonName);
    const {total, next, operation} = calculate(calculation, buttonName)
    setCalculation({total, next, operation});
  }

  const keys = {
    ac: 'AC',
    equal: '=',
    dot: '.',
    pm: '+/-',
    perc: '%',
    div: '÷',
    mul: 'x',
    sum: '+',
    subs: '-',
    num1: '1',
    num2: '2',
    num3: '3',
    num4: '4',
    num5: '5',
    num6: '6',
    num7: '7',
    num8: '8',
    num9: '9',
    num0: '0'
  }

  return (
    <div className={calculatorStyle}>
      <Result className={`${display} ${displayColor}`} display={calculation.next ? calculation.next : calculation.total}/>

      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.ac} onClickAction={() => handleClick(keys.ac)}/>
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.pm} onClickAction={() => handleClick(keys.pm)} />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.perc} onClickAction={() => handleClick(keys.perc)} />
      <Button className={`${regularButton} ${actionColor}`} buttonName={keys.div} onClickAction={() => handleClick(keys.div)}  />

      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num7} onClickAction={() => handleClick(keys.num7)}  />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num8} onClickAction={() => handleClick(keys.num8)}  />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num9} onClickAction={() => handleClick(keys.num9)}  />
      <Button className={`${regularButton} ${actionColor}`} buttonName={keys.mul} onClickAction={() => handleClick(keys.mul)}  />

      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num4} onClickAction={() => handleClick(keys.num4)}  />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num5} onClickAction={() => handleClick(keys.num5)}  />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num6} onClickAction={() => handleClick(keys.num6)}  />
      <Button className={`${regularButton} ${actionColor}`} buttonName={keys.subs} onClickAction={() => handleClick(keys.subs)} />

      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num1} onClickAction={() => handleClick(keys.num1)}  />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num2} onClickAction={() => handleClick(keys.num2)}  />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.num3} onClickAction={() => handleClick(keys.num3)}  />
      <Button className={`${regularButton} ${actionColor}`} buttonName={keys.sum} onClickAction={() => handleClick(keys.sum)} />

      <Button className={`${wideButton} ${numberColor}`} buttonName={keys.num0} onClickAction={() => handleClick(keys.num0)}  />
      <Button className={`${regularButton} ${numberColor}`} buttonName={keys.dot} onClickAction={() => handleClick(keys.dot)} />
      <Button className={`${regularButton} ${actionColor}`} buttonName={keys.equal} onClickAction={() => handleClick(keys.equal)} />
    </div>
  );
}

export default Calculator;
