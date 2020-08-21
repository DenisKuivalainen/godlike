import React from 'react';
import Ramka from './hat/Ramka';
import RenderInfo from './info/RenderInfo';
import Work from './Projects/Work';
import Boxes from './box/Boxes';

import {FontSize} from './helpers/FontSize';
import {cLn} from './helpers/Cell';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: 0,
      h: 100,
      h1: 100,
      top: 0
    };
    this.setFontSize = this.setFontSize.bind(this);
  }
  
  render() {
    let a = this.state.scr
    return (
      <FontSize.Provider value={this.state.h}>
        <div className="l1" style={{zIndex: 1, width: '100vw'}}>
          <Ramka />
          <RenderInfo />
          <Boxes />
          <Work />
          <p style={{fontSize: this.state.h}}>{cLn()}</p>
          <p style={{fontSize: this.state.h}}> </p>
          <p style={{fontSize: this.state.h}}> </p>
          <p style={{fontSize: this.state.h}}> c:\users\godlike&#62; <a href='https://github.com/DenisKuivalainen/godlike'>2020 (c) by godlike</a></p>
          <p style={{fontSize: this.state.h}}> </p>
          <p style={{fontSize: this.state.h}}> </p>
        </div>
      </FontSize.Provider>
    );
  }

  setFontSize() {
    let w =  window.innerWidth > document.documentElement.clientWidth ? document.documentElement.clientWidth : window.innerWidth;
    let h = Math.floor(w *500000 / 300) / 100000;
    this.setState({h: h + 'px'})
  }

  componentDidMount() {
    window.addEventListener('resize', this.setFontSize);
    window.addEventListener('load', this.setFontSize);
    window.addEventListener('scroll', this.setFontSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setFontSize);
    window.removeEventListener('load', this.setFontSize);
    window.removeEventListener('scroll', this.setFontSize);
  }
}

export default App;
