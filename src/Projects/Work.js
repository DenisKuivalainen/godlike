import React from 'react';

import {cFl, cCl, cSp, cBd} from '../helpers/Cell';
import {info} from '../helpers/Info';
import {FontSize} from '../helpers/FontSize';
import {parser} from '../helpers/parser';
import '../App.css';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.gH = this.gH.bind(this);
    }
    static contextType = FontSize;

    render() {
        return(
            <div>
                <div>
                    {this.getTitle()}
                    {this.getWork()}
                </div>
                <div>
                    
                </div>
            </div>
        )
    }

    
    getTitle() {
        let arr = [];

        arr.push(cCl(cFl(cBd(3, 94), 100)));
        arr.push(cCl(cFl(cFl('   |     >Project Work', 96) + '|', 100)));
        arr.push(cCl(cFl(cBd(3, 94), 100)));
        arr.push(cSp());
        arr.push(cSp());

        return arr.map((n, i) => 
            <p id={'work_t_' + i} style={{fontSize: this.context}}>{n}</p>
        )
    }

    getWork() {
        return info.work.map((work) => {
            let a = cCl(cFl('    ' + work.name, 100));

            let b = '    -';
            while(b.length < 96) {
                b += '-';
            }
            b = cCl(cFl(b, 100));

            let cp = parser(work.disc, 92);
            let c = cp.map((val) => <p style={{fontSize: this.context}}>{cCl(cFl('    ' + val, 100))}</p>)

            let d = work.link !== '' ? this.getWorkLink(work.link) : '';

            return (
                <div>
                    <p style={{fontSize: this.context}}>{a}</p>
                    <p style={{fontSize: this.context}}>{b}</p>
                    {c} {d}
                    <p style={{fontSize: this.context}}>{cSp()}</p>
                    <p style={{fontSize: this.context}}>{cSp()}</p>
                </div>
            )
        })
    }

    getWorkLink(link) {
        let lng = link.length;
        let a = '|  ';

        let b = ' ';
        while(b.length < 95 - lng - a.length) {
            b += ' '
        }
        b += '|'

        return(
            <p style={{fontSize: this.context}}>
                {a} <a href={link}>{'* ' + link}</a> {b}
            </p>
        )
    }

}
export default Work;