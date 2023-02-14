import React from 'react';
import Button from './Button';
import Result from './Result';
import '../App.css';

function Calculator() {
  const regularButton = 'box-border border-2 border-neutral-400 col-span-1 bg-indigo-500 flex justify-center items-center'
  const wideButton = 'box-border border-2 border-neutral-400 col-span-2 bg-indigo-500 flex justify-center items-center'
  const display = 'box-border border-2 border-neutral-400 col-span-4 bg-indigo-500 flex justify-center items-center text-white'
  const actionColor = 'bg-orange-500'
  const numberColor = 'bg-stone-200'
  const displayColor = 'bg-neutral-800'
  const calculatorStyle = 'grid grid-cols-4 w-80 h-80 box-border border-4 border-neutral-400'

  return (
    <div className={calculatorStyle}>
      <Result className={display+' '+displayColor} result='Calculator'/>

      <Button className={regularButton+' '+numberColor} identifier='AC'/>
      <Button className={regularButton+' '+numberColor} identifier='+/-'/>
      <Button className={regularButton+' '+numberColor} identifier='%'/>
      <Button className={regularButton+' '+actionColor} identifier='/'/>

      <Button className={regularButton+' '+numberColor} identifier='7'/>
      <Button className={regularButton+' '+numberColor} identifier='8'/>
      <Button className={regularButton+' '+numberColor} identifier='9'/>
      <Button className={regularButton+' '+actionColor} identifier='x'/>

      <Button className={regularButton+' '+numberColor} identifier='4'/>
      <Button className={regularButton+' '+numberColor} identifier='5'/>
      <Button className={regularButton+' '+numberColor} identifier='6'/>
      <Button className={regularButton+' '+actionColor} identifier='-'/>

      <Button className={regularButton+' '+numberColor} identifier='1'/>
      <Button className={regularButton+' '+numberColor} identifier='2'/>
      <Button className={regularButton+' '+numberColor} identifier='3'/>
      <Button className={regularButton+' '+actionColor} identifier='+'/>

      <Button className={wideButton+' '+numberColor} identifier='0'/>
      <Button className={regularButton+' '+numberColor} identifier='.'/>
      <Button className={regularButton+' '+actionColor} identifier='='/>
    </div>
  );
}

export default Calculator;