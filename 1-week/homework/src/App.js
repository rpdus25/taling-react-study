import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter intervalNum={1}/>
          <Counter intervalNum={2}/>
        </header>
      </div>
    );
  }
}

export default App;
