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
    this.gH = this.gH.bind(this);
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

  gH() {
    // window.innerWidth
    let w =  window.innerWidth > document.documentElement.clientWidth ? document.documentElement.clientWidth : window.innerWidth;
    // console.log(window.innerWidth - document.documentElement.clientWidth)
    let h = Math.floor(w *500000 / 300) / 100000;
    //let scr = window.pageYOffset - Math.floor(window.pageYOffset / h) * h

    // let mh = Math.max(
    //   document.body.scrollHeight, document.documentElement.scrollHeight,
    //   document.body.offsetHeight, document.documentElement.offsetHeight,
    //   document.body.clientHeight, document.documentElement.clientHeight
    // );



    // console.log(mh - Math.floor(mh/h)*h)

    this.setState({h: h + 'px'})
  }

  componentDidMount() {
    window.addEventListener('resize', this.gH);
    window.addEventListener('load', this.gH);
    window.addEventListener('scroll', this.gH);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.gH);
    window.removeEventListener('load', this.gH);
    window.removeEventListener('scroll', this.gH);
  }

  makeCMD() {
    // let scr = window.pageYOffset;
    // let h = Math.max(
    //   document.body.scrollHeight, document.documentElement.scrollHeight,
    //   document.body.offsetHeight, document.documentElement.offsetHeight,
    //   document.body.clientHeight, document.documentElement.clientHeight
    // );
    // let vh = document.documentElement.clientHeight;

    // let cScr = window.pageYOffset;
    // let a = this.state.h1;
    // let prc = cScr % a;

    // this.setState({top: prc})
  }
}

export default App;
