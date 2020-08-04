import React from 'react';
import { FontSize } from '../helpers/FontSize';
import {info} from '../helpers/Info';
import {getLeft} from './LeftInfo';
import {getRight} from './RightInfo';

class RenderInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          right: getRight(),
          left: getLeft()
      };
    }
    static contextType = FontSize;

    render() {
        return(
            <div>
                {this.getRender1()}
                {this.getRender2()}
                {this.getRender3()}
            </div>
        )
    }

    getRender1() {
        return this.state.left.map((val, i) => 
            <p id={'info_1_' + i} style={{fontSize: this.context}}>{'|' + (this.state.right[i] + val).substr(1, 98) + '|'}</p>
        )
    }

    getRender2() {
        let a = this.state.right[this.state.left.length];
        a = '|' + a.substr(1, a.length)
        return(
            <p style={{fontSize: this.context}}>{a + ' '}
                <a href={info.git} style={{fontSize: this.context}}>{info.git}</a>
                {'' + this.fillA()}
            </p>
        )
    }
    fillA() {
        let a = '';
        while (a.length < 31 - info.git.length) {
            a += ' ';
        }
        a += '|';
        return a
    }

    getRender3() {
        let a = this.state.right.slice(this.state.left.length + 1);
        return a.map((val, i) => 
            <p id={'info_2_' + i} style={{fontSize: this.context}}>{this.fillB(val)}</p>
        )
    }

    fillB(val) {
        let a = '|' + val.substr(1);

        while (a.length < 99) {
            a += ' ';
        }
        a += '|'
        return a;
    }
    
}

export default RenderInfo;