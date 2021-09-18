/* eslint-disable  */
import "./Calculator.css";

const Calculator = ({obj, handleClick}) => {
    const { total, operation, next } = obj;
    return (
      <div className='container'>
        <div class="display">{total} {operation} { next}</div>
        <div className='keys'>
          <button id="reset" name="AC" onClick={handleClick}>AC</button>
          <button id="backspace" name="+/-" onClick={handleClick}>+/-</button>
          <button name="%" onClick={handleClick}>%</button>
          <button class="operator" name="÷" onClick={handleClick}>÷</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button class="operator" name="x" onClick={handleClick}>x</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button class="operator" name="-" onClick={handleClick}>-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button class="operator" id="plus" name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="00" onClick={handleClick}>00</button>
          <button name="." onClick={handleClick}>.</button>
          <button class="operator grid" onClick={handleClick}>=</button>
          </div>
    </div>
    );
    
}

export default Calculator;