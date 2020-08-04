import React from 'react';
import Letters from './Letters';
import Portrait from './Portrait';
import Ramka from './Ramka';
import './Hat.css';

class Hat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render() {
      return (
        <div className="App">
            <p> </p>
            <p> </p>
            <p> </p>
          <Letters word='Denis' />
          <p> </p>
          <Letters word='Kuivalainen' />
            <p> </p>
            <p> </p>
            <p> </p>
            <Portrait />

            <Ramka />
        </div>
      );
    }
  }
  
  export default Hat;