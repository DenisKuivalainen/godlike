import React from 'react';
import {FontSize} from './helpers/FontSize';

class Letters extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static contextType = FontSize;

    render() {
        return(
            <div className="line">
                <p style={{fontSize: this.context}}>{this.getWord(0)}</p>
                <p style={{fontSize: this.context}}>{this.getWord(1)}</p>
                <p style={{fontSize: this.context}}>{this.getWord(2)}</p>
                <p style={{fontSize: this.context}}>{this.getWord(3)}</p>
                <p style={{fontSize: this.context}}>{this.getWord(4)}</p>
                <p style={{fontSize: this.context}}>{this.getWord(5)}</p>
            </div>
        )
    }

    getLetter(l) {
        return ABC.indexOf(l);
    }

    getCode(l, n) {
        return BIT[this.getLetter(l)][n];
    }

    getWord(n) {
        let a = '     ';
        let b = this.props.word.toLowerCase();
        for (let i = 0; i < b.length; i++) {
            a = a + ' ' + this.getCode(b.substr(i, 1), n);
        }
        while(a.length < 100) {
            a += ' ';
        }
        return a;
    }
}
const BIT = [
    //0
    ['  A ', ' A A', ' A A', ' AAA', 'A  A', 'A  A'],
    //1
    ['', '', '', '', '', ''],
    //2
    ['', '', '', '', '', ''],
    //3
    ['DDD ', 'D  D', 'D  D', 'D  D', 'D  D', 'DDD '],
    //4
    ['EEEE', 'E   ', 'EEE ', 'E   ', 'E   ', 'EEEE'],
    //5
    ['', '', '', '', '', ''],
    //6
    ['', '', '', '', '', ''],
    //7
    ['', '', '', '', '', ''],
    //8
    ['III ', ' I  ', ' I  ', ' I  ', ' I  ', 'III '],
    //9
    ['', '', '', '', '', ''],
    //10
    ['K K ', 'K K ', 'KK  ', 'K K ', 'K  K', 'K  K'],
    //11
    ['L   ', 'L   ', 'L   ', 'L   ', 'L   ', 'LLLL'],
    //12
    ['', '', '', '', '', ''],
    //13
    ['N  N', 'NN N', 'NN N', 'N NN', 'N NN', 'N  N'],
    //14
    ['', '', '', '', '', ''],
    //15
    ['', '', '', '', '', ''],
    //16
    ['', '', '', '', '', ''],
    //17
    ['', '', '', '', '', ''],
    //18
    ['SSSS', 'S   ', ' SSS', '   S', '   S', 'SSSS'],
    //19
    ['', '', '', '', '', ''],
    //20
    ['U  U', 'U  U', 'U  U', 'U  U', 'U  U', 'UUUU'],
    //21
    ['V  V', 'V  V', 'V  V', ' V V', ' V V', '  V '],
    //22
    ['', '', '', '', '', ''],
    //23
    ['', '', '', '', '', ''],
    //24
    ['', '', '', '', '', ''],
    //25
    ['', '', '', '', '', '']
]

const ABC = 'abcdefghijklmnopqrstuvwxyz';

export default Letters;