import React from 'react';
import Letters from './Letters';
import Portrait from './Portrait';
import Ramka from './Ramka';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <div className="l1">
          <p> </p>
          <p> </p>
          <p> </p>
          <Letters word='Denis' />
          <p> </p>
          <Letters word='Kuivalainen' />
          <p> </p>
          <p> </p>
          <p> </p>
        </div>
        <div className="l2">
          <p> </p>
          <p> </p>
          <Portrait />
          <p> </p>
          <p> </p>
        </div>
        <div className="l3">
          <Ramka />
        </div>
      </div>
    );
  }
}

export default App;
