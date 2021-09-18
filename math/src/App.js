/* eslint-disable  */
import { Component } from "react"
import Calculator from "./components/Calculator";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: '',
    };
  }

  render() {
    return (
      <Calculator/>
    );
  }
}

export default App;