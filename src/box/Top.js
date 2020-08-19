import React from 'react';

import {FontSize} from '../helpers/FontSize';
import {cFl, cCl} from '../helpers/Cell';
import {parser} from '../helpers/parser';

export default class Top extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static contextType = FontSize;

    line() {
        let a = '';
        while(a.length < 28) {
            a += '-';
        }

        return cCl(a);
    }

    name(name) {
        return cCl(cFl('|    > ' + name, 28));
    }

    text(desc) {
        let arr = [];
        let text = parser(desc, 22);
        for (let j = 0; j < text.length; j++) {
            arr.push('   ' + text[j]); 
        }

        while(arr.length < 5) {
            arr.push('');
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = cCl(cFl(arr[i], 28));
        }

        return arr;
    }

    buildTop(proj) {
        let arr = [];
        arr.push(this.line());
        arr.push(this.name(proj.name));
        arr.push(this.line());
        arr.push(cCl(cFl('', 28)));
        //arr.concat(this.text(proj.desc));

        let sub = this.text(proj.desc);
        sub.forEach(element => {
            arr.push(element);
        });

        arr.push(cCl(cFl('', 28)));

        return arr;
    }

    buildBtm(proj) {
        let arr =[];
        arr.push(cCl(cFl('', 28)));
        arr.push(this.line());

        return arr;
    }

    build() {
        let arr = [];

        if(this.props.top !== undefined) {
            arr = Array(10).fill('     ');

            for (let i = 0; i < this.props.projs.length; i++) {
                let sub = this.buildTop(this.props.projs[i]);

                for (let j = 0; j < 10; j++) {
                    arr[j] += sub [j] + '   ';
                }
            }
        } else {
            arr = Array(2).fill('     ');
            for (let i = 0; i < this.props.projs.length; i++) {
                let sub = this.buildBtm(this.props.projs[i]);

                for (let j = 0; j < 2; j++) {
                    arr[j] += sub [j] + '   ';
                }
            }
            arr.push('');
            arr.push('');
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = cCl(cFl(arr[i], 100));
        }
        
        return arr;
    }

    render() {
        {console.log(this.props.projs)}
        return(
            <div>
                {this.build().map((val, i) => {
                    return <p key={i} style={{fontSize: this.context}}>{val}</p>
                })}
            </div>
        )
    }

}
