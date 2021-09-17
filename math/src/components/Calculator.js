/* eslint-disable  */
import React, { Component } from 'react';

import "./Calculator.css";

class Calculator extends React.Component {
  render() { 
    return (
      <div className='container'>
      <div>
        <h5>Casio</h5>
      </div>
        <input type="number"></input>
        <div className='keys'>
          <div className="keys-1">
          <button id="reset">AC</button>
          <button id="backspace">Del</button>
          <button name="%">%</button>
          <button name="7">7</button>
          <button name="8">8</button>
          <button name="9">9</button>
          <button name="x">x</button>
          <button name="4">4</button>
          <button name="5">5</button>
          <button name="6">6</button>
          <button name="-">-</button>
          <button name="1">1</button>
          <button name="2">2</button>
          <button name="3">3</button>
          <button id="plus" name="+">+</button>
          <button name="0">0</button>
          </div>
          <div className="keys-2">
            <button name=".">.</button>
            <button>=</button>
          </div>
      </div>

    </div>
    );
  }
}
 
export default Calculator;