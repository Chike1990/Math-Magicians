/* eslint-disable  no-unused-vars */
import { Component } from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends Component {
  state = {
    obj: {},
  }

  handleClick = ({ target }) => {
    const result = calculate(this.state.obj, target.name);
    this.setState({ obj: result });
  }

  render() {
    return (
      <Calculator handleClick={this.handleClick} obj={this.state.obj} />
    );
  }
}

export default App;