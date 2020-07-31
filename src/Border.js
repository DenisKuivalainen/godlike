import React from 'react';
import Textfit from 'react-textfit';
import './Hat.css';

class Border extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render() {
      return (
        <div className="line">
            {this.getReturn()}
        </div>
      );
    }

    getReturn() {
        console.log(1)
        return Array(eval(this.props.n)).fill(null).map((i) => <Textfit>{this.getLine(i)}</Textfit>)
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