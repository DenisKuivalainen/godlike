import React from 'react';

import Box from './Box';

import {FontSize} from '../helpers/FontSize';
import {info} from '../helpers/Info';

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

    render() {
        return(
            <div>
                {this.fillArr().map((val, i) => <Box projs={val} key={i} size={this.context} />)}
            </div>
        )
    }
}


export default Boxes;