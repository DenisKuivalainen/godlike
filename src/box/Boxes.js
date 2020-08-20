import React from 'react';

import Box from './Box';

import {FontSize} from '../helpers/FontSize';
import {info} from '../helpers/Info';
import {cFl, cCl, cSp, cBd} from '../helpers/Cell';

class Boxes extends React.Component {
    constructor(props) {
      super(props);
    }
    static contextType = FontSize;

    fillArr() {
        let work = info.proj;
        let arr = [];
        let sub = [];
        let n = 0;

        for (let i = 0; i < work.length; i++) {
            sub.push(work[i]);
            n += 1;
            
            if(n > 2) {
                n = 0;
                arr.push(sub);
                sub = []
            }
        }

        if(n < 3 && n > 0) {
            n = 0;
            arr.push(sub);
            sub = []
        }

        return arr;
    }

    getTitle() {
        let arr = [];

        arr.push(cCl(cFl(cBd(3, 94), 100)));
        arr.push(cCl(cFl(cFl('   |     >Projects', 96) + '|', 100)));
        arr.push(cCl(cFl(cBd(3, 94), 100)));
        arr.push(cSp());
        arr.push(cSp());

        return arr;
    }

    render() {
        return(
            <div>
                {
                    this.getTitle().map((n, i) => 
                        <p id={'work_t_' + i} style={{fontSize: this.context}}>{n}</p>
                    )
                }
                {this.fillArr().map((val, i) => <Box projs={val} key={i} size={this.context} />)}
            </div>
        )
    }
}


export default Boxes;