/* eslint-disable  */
import React, { Component } from 'react';

import "./Calculator.css";

class Calculator extends React.Component {

  render() {
    const { total, operation, next } = this.props.obj;
    return (
      <div className='container'>
      <div>
        <h5>Casio</h5>
      </div>
        <div class="display">{total} {operation} { next}</div>
        <div className='keys'>
          <button id="reset" name="AC" onClick={this.props.handleClick}>AC</button>
          <button id="backspace" name="+/-" onClick={this.props.handleClick}>+/-</button>
          <button name="%" onClick={this.props.handleClick}>%</button>
          <button name="/" onClick={this.props.handleClick}>/</button>
          <button name="7" onClick={this.props.handleClick}>7</button>
          <button name="8" onClick={this.props.handleClick}>8</button>
          <button name="9" onClick={this.props.handleClick}>9</button>
          <button name="x" onClick={this.props.handleClick}>x</button>
          <button name="4" onClick={this.props.handleClick}>4</button>
          <button name="5" onClick={this.props.handleClick}>5</button>
          <button name="6" onClick={this.props.handleClick}>6</button>
          <button name="-" onClick={this.props.handleClick}>-</button>
          <button name="1" onClick={this.props.handleClick}>1</button>
          <button name="2" onClick={this.props.handleClick}>2</button>
          <button name="3" onClick={this.props.handleClick}>3</button>
          <button id="plus" name="+" onClick={this.props.handleClick}>+</button>
          <button name="0" onClick={this.props.handleClick}>0</button>
          <button name="00" onClick={this.props.handleClick}>00</button>
          <button name="." onClick={this.props.handleClick}>.</button>
          <button onClick={this.props.handleClick}>=</button>
       </div>

    </div>
    );
  }
}
 
export default Calculator;