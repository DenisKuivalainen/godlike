import React from 'react';
import {FontSize} from './helpers/FontSize';
import './Hat.css';

class Border extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static contextType = FontSize;
    
    render() {
      return (
        <div className="line">
            {this.getReturn()}
        </div>
      );
    }

    getReturn() {
        console.log(1)
        return Array(eval(this.props.n)).fill(null).map((i) => <p style={{fontSize: this.context}}>{this.getLine(i)}</p>)
    }

    getLine(i) {
        console.log(this.props.fst, this.props.snd, this.props.n)
        let a = this.props.fst;
        for (let i = 0; i < 98; i++) {
            a += this.props.snd;            
        }
        a += this.props.fst;
        console.log(a)
        return a;
    }
}
  
  export default Border;