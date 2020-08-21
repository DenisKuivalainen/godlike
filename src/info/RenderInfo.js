import React from 'react';
import { FontSize } from '../helpers/FontSize';
import {info} from '../helpers/Info';
import {getLeft} from './LeftInfo';
import {getRight} from './RightInfo';
import {cSp} from '../helpers/Cell';

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
            <p key={'info_1_' + i} style={{fontSize: this.context}}>{'|' + (this.state.right[i] + val).substr(1, 98) + '|'}</p>
        )
    }

    getRender2() {
        let a = this.state.right[this.state.left.length];
        a = '|' + a.substr(1, a.length);

        let b = this.state.right[this.state.left.length + 2];
        b = '|' + b.substr(1, a.length);

        return(
            <div>
                <p style={{fontSize: this.context}}>{a + ' '}
                    <a href={info.git} style={{fontSize: this.context}}>{LINKS[0]}</a>
                    {'' + this.fillType1(0)}
                </p>
                <p style={{fontSize: this.context}}>{this.fillType2(this.state.right[this.state.left.length + 1])}</p>
                <p style={{fontSize: this.context}}>{b + ' '}
                    <a href={info.lki} style={{fontSize: this.context}}>{LINKS[1]}</a>
                    {'' + this.fillType1(1)}
                </p>
                <p style={{fontSize: this.context}}>{cSp()}</p>
                <p style={{fontSize: this.context}}>{cSp()}</p>
                <p style={{fontSize: this.context}}>{cSp()}</p>
            </div>
        )
    }

    getRender3() {
        let a = this.state.right.slice(this.state.left.length + 3, this.state.right.length - this.state.left.length - 5);
        
        return a.map((val, i) => 
            <p id={'info_2_' + i} style={{fontSize: this.context}}>{this.fillType2(val)}</p>
        )
    }

    fillType1(n) {
        let a = '';
        while (a.length < 31 - LINKS[n].length) {
            a += ' ';
        }
        a += '|';
        return a
    }

    fillType2(val) {
        let a = '|' + val.substr(1);

        while (a.length < 99) {
            a += ' ';
        }
        a += '|'
        return a;
    }
    
}

const LINKS = ["* GitHub", "* LinkedIn"]
export default RenderInfo;