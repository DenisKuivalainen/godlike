import React from 'react';
import Ramka from './hat/Ramka';
import RenderInfo from './info/RenderInfo'


import {info} from './helpers/Info';
import {FontSize} from './helpers/FontSize';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: 0,
      h: 100
    };
    this.gH = this.gH.bind(this);
  }
  
  render() {
    return (
      <FontSize.Provider value={this.state.h}>
        <div className="l1" style={{zIndex: 1, width: '100vw'}}>
          <Ramka />
          <p style={{fontSize: this.state.h}}> <br/> <br/> </p>

          <p style={{fontSize: this.state.h}} />

          <p style={{fontSize: this.state.h}}> <br/> <br/> </p>

          <RenderInfo/>
        </div>
        {/* <div className="l2" style={{zIndex: 2}}>
          <p style={{fontSize: this.state.h}}> <br/> </p>
          <Portrait />
          <p style={{fontSize: this.state.h}}> <br/> </p>
        </div>
        <div className="l3" style={{zIndex: 3}}>
          <Ramka />
        </div> */}
      </FontSize.Provider>
    );
  }

  gH() {
    let h = Math.floor(window.innerWidth *500000 / 300) / 100000;
    h += 'px';
    console.log(h)
    this.setState({h: h})
  }

  componentDidMount() {
    window.addEventListener('resize', this.gH);
    window.addEventListener('load', this.gH);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.gH);
    window.removeEventListener('load', this.gH);
  }
}

export default App;
