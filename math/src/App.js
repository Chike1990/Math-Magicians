/* eslint-disable  */
import { useState } from "react"
import Calculator from "./components/Calculator";
import calculate from './logic/calculate';


const App = () => {
  const [obj, setObj] = useState({})

  const handleClick = ({target}) => {
    const result = calculate(obj, target.name);
    setObj(result)
  }

    return (
      <Calculator handleClick={handleClick} obj={obj} />
    );
}

export default App;