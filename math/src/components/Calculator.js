/* eslint-disable  */
import React, { Component } from 'react';

import "./Calculator.css";

class Calculator extends React.Component {

  render() {
    // const { total, operation, next } = this.props.obj;
    return (
      <div className='container'>
        <div class="display"></div>
        <div className='keys'>
          <button id="reset" name="AC">AC</button>
          <button id="backspace" name="+/-">+/-</button>
          <button name="%">%</button>
          <button class="operator" name="/">/</button>
          <button name="7">7</button>
          <button name="8">8</button>
          <button name="9">9</button>
          <button class="operator" name="x">x</button>
          <button name="4">4</button>
          <button name="5">5</button>
          <button name="6">6</button>
          <button class="operator" name="-">-</button>
          <button name="1">1</button>
          <button name="2">2</button>
          <button name="3">3</button>
          <button class="operator" id="plus" name="+">+</button>
          <button name="0">0</button>
          <button name="00">00</button>
          <button name=".">.</button>
          <button class="operator grid">=</button>
        </div>
        </div>
  
    );
  }
}

export default Calculator;