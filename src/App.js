import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Header from './components/Header';
import Quote from './components/Quote';
import calculate from './logic/calculate';
import './Styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = ({ target }) => {
    const result = calculate(this.state, target.name);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/calculator" render={() => (<Calculator handleClick={this.handleClick} total={total} operation={operation} next={next} />)} />
          <Route path="/Quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
